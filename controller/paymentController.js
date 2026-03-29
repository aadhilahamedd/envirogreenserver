const Stripe = require('stripe');

exports.createPaymentIntent = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
    console.log("Create PaymentIntent requested for amount:", req.body.amount);

    try {

        const amount = parseInt(req.body.amount);

        if (!amount || isNaN(amount)) {
            return res.status(400).json({ message: "Valid amount is required" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, 

            currency: 'inr', 
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating PaymentIntent:", error);
        res.status(500).json({ message: error.message });
    }
};
