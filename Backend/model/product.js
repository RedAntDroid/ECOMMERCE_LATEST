const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the product name"],
    },
    description: {
        type: String,
        required: [true, "Please provide the product description"],
    },
    category: {
        type: String,
        required: [true, "Please provide the product category"],
    },
    tags: {
        type: [String],
        default: [],
    },
    price: {
        type: Number,
        required: [true, "Please provide the product price"],
    },
    stock: {
        type: Number,
        required: [true, "Please provide the product stock"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        match: [/.+@.+\..+/, "Please provide a valid email address"],
    },
    images: {
        type: [String],
        required: [true, "Please upload product images"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    cart: [
        {
            productid:{
                type: String,
                required: [true, 'Please provide the product ID'],
                unique: true,
            },
            quantity:{
                type: Number,
                required: [true, 'Please provide the quantity'],
                min: [0, 'Quantity cannot be negative'],
            },
        },
    ]

},{
    timestamps: true,
});
router.post('/cart', async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const email = userId;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: 'Invalid productId' });
        }

        if (!quantity || quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const cartItemIndex = user.cart.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (cartItemIndex > -1) {
            user.cart[cartItemIndex].quantity += quantity;
        } else {
            user.cart.push({ productId, quantity });
        }

        await user.save();

        res.status(200).json({
            message: 'Cart updated successfully',
            cart: user.cart,
        });
    } 
    
    catch (error) {
        console.error("Detailed server error:", error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
    
});

module.exports = mongoose.model("Product", productSchema);

