export const featuresData = [
    {
        category: "Accounts",
        features: [
            {
                title: "Wallet Account",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Experience Seamless Banking with MyMonty Europe's Digital Wallet Account</span>Discover a new era of banking convenience with MyMonty Europe's user-friendly mobile app. Our intuitive platform offers a comprehensive suite of banking services, from account management and fund transfers",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Experience seamless banking with MyMonty Europe's digital Wallet Account</h3>
                        </div>
                        <p>
                            Discover a new era of banking convenience with MyMonty Europe's user-friendly mobile app. 
                            Our intuitive platform offers a comprehensive suite of banking services, from account management 
                            and fund transfers, all accessible on-the-go.<br />
                            Enjoy the flexibility of our single-currency wallet account, available in EUR or GBP, and make 
                            quick, secure transactions with our contactless payment solutions through Google/Apple Pay.
                        </p>
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Top-up by card</h3>
                        </div>
                        <p>
                            Easily top-up your MyMonty wallet by securely saving your Mastercard or Visa cards. 
                            Enjoy instant access to your funds with every top-up. Fees for this service can be configured 
                            based on your personalized pricing plan, ensuring flexibility and convenience tailored to your needs.
                        </p>
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Top up by P2P request</h3>
                        </div>
                        <p>
                            Easily request funds from friends or family and instantly top up your balance with just a few taps.
                        </p>
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Top up by SEPA transfer</h3>
                        </div>
                        <p>
                            Conveniently add funds to your account via a secure and straightforward SEPA bank transfer.
                        </p>
                    </div>
                `,
                icon: "wallet-account",
                image: "wallet-account"
            }
        ]
    },
    {
        category: "Cards",
        features: [
            {
                title: "Virtual Cards",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Effortless Control with MyMonty Virtual Cards</span>With MyMonty's Issuing type wallet, you can effortlessly manage your finances by issuing virtual cards directly from our user interface. Simply navigate to the Cards tab and select the option to issue a Virtual card, which will be instantly available for use",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <h3>Effortless control with MyMonty Virtual Cards</h3>
                        </div>
                        <p>
                            With MyMonty's Issuing type wallet, you can effortlessly manage your finances by issuing virtual cards 
                            directly from our user interface. Simply navigate to the Cards tab and select the option to issue a Virtual card, 
                            which will be instantly available for use.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <p class="text-primary">Once issued, you can</p>
                        </div>
                        <ul class="flex flex-col gap-4">
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>View card details by clicking the See details button and authenticating yourself</h4>
                            </li>
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>Freeze the card</h4>
                            </li>
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>Destroy the card (only after it has been frozen)</h4>
                            </li>
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>Add the card to Apple or Google Pay</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p>
                            If a virtual card is destroyed, you can request a new one at any time. To ensure you never miss an expiry date, 
                            you'll receive a push notification reminding you when your card's validity is about to end, allowing you to renew it easily 
                            by navigating to the card and clicking the Renew button.
                        </p>
                        <p>
                            Embrace the convenience and security of MyMonty virtual cards, designed to give you full control over your digital transactions.
                        </p>
                    </div>
                `,
                icon: "virtual-cards",
                image: "virtual-cards"
            },
            {
                title: "Physical Cards",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Effortless Issuance and Management of Physical Cards</span>For the Issuing type wallet, physical cards can be requested easily, similar to virtual cards. Navigate to the Physical Card screen in the Cards tab, ensure you are KYC-verified and have a non-zero balance, then click “Order card”",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <h3>Effortless issuance and management of Physical Cards</h3>
                        </div>
                        <p>
                            For the Issuing type wallet, physical cards can be requested easily, similar to virtual cards. Navigate to the Physical Card screen in the Cards tab, ensure you are KYC-verified and have a non-zero balance, then click “Order card”. Enter your delivery details and set your PIN in a few quick steps.
                        </p>
                         <p>
                            Users are limited to one physical and one virtual card at a time. Once confirmed, your card will be on its way. Activate it upon receipt via the app.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <p class="text-primary">With an activated physical card, you can:</p>
                        </div>
                        <ul class="flex flex-col gap-4">
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>View card details by clicking the See details button and authenticating yourself</h4>
                            </li>
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>Freeze the card</h4>
                            </li>
                            <li class="flex items-baseline gap-2">
                                <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                                <h4>Add the card to Apple or Google Pay.</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p>
                            Destroyed physical cards can be reordered, with fees deducted immediately. Cards are sent via RoyalMail without tracking. As expiration nears, you'll receive a push notification, and can reissue the card by following the same process as a new order. Delivery fees apply.
                        </p>
                    </div>
                `,
                icon: "physical-cards",
                image: "physical-cards"
            }
        ]
    },
    {
        category: "Transfers",
        features: [
            {
                title: "Wire Transfers: SEPA",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Receive Wire Transfers with Ease</span>Register now and get your own unique IBAN, allowing you to start receiving wire transfers effortlessly. MyMonty supports EUR SEPA transfers (Single Euro Payment Area) and BGN BISERA inbound transfers, ensuring a smooth and secure transfer experience",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Receive wire transfers with ease</h3>
                        </div>
                        <p>
                            Register now and get your own unique IBAN, allowing you to start receiving wire transfers effortlessly. MyMonty supports EUR SEPA transfers (Single Euro Payment Area) and BGN BISERA inbound transfers, ensuring a smooth and secure transfer experience.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Send wire transfers</h3>
                        </div>
                        <p>
                            Easily send outbound wire transfers to recipients matching your currency. Customize fees for IBAN transfers based on your selected plan. Save recipient details like names, IBANs, and aliases for quick future transfers. MyMonty supports EUR SEPA, BGN BISERA outbound transfers, and GBP Faster Payments for efficient transactions.
                        </p>
                    </div>
                `,
                icon: "wire-transfers-sepa",
                image: "wire-transfers-sepa"
            },
            {
                title: "Peer to Peer Transfers",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Instant P2P Transfers</span>Easily transfer funds to other users within your MyMonty wallet instantly. If the recipient is not yet registered, they will receive an SMS invitation. Once they register and complete KYC verification, the transfer will be processed and credited to their account",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Instant P2P transfers</h3>
                        </div>
                        <p>
                            Easily transfer funds to other users within your MyMonty wallet instantly. If the recipient is not yet registered, they will receive an SMS invitation. Once they register and complete KYC verification, the transfer will be processed and credited to their account. P2P transfers expire after three days if not completed.<br />Additionally, P2P transfers can be configured to work between MyMonty and other Paynetics partners, such as Phyre, A1 Wallet, Pay by Vivacom, and BACB Pay.  
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Send money instantly</h3>
                        </div>
                        <p>
                            Easily send money to friends and family within the MyMonty wallet. If the recipient isn't registered, they'll receive an SMS invitation to join. Transfers are instant once they complete registration and KYC verification.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Receive funds effortless</h3>
                        </div>
                        <p>
                            Start receiving funds immediately with your unique IBAN. MyMonty supports EUR SEPA and BGN BISERA transfers, ensuring a smooth and secure experience. Funds are credited instantly to your account.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <img src="/images/icons/box-empty.svg" alt="Box Empty" width="18" height="18">
                            <h3>Request money conveniently</h3>
                        </div>
                        <p>
                            Request money from any contact with MyMonty's app. Non-users receive an SMS invite to join. Once they register and complete KYC, they can send you the requested amount instantly. Requests expire after three days if not processed.
                        </p>
                    </div>
                `,
                icon: "peer-to-peer-transfers",
                image: "peer-to-peer-transfers"
            }
        ]
    },
    {
        category: "Payments",
        features: [
            {
                title: "Google and Apple Pay",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Streamlined Mobile Payments</span>Experience seamless transactions with MyMonty through Google Pay. Effortlessly make secure payments in-store, online, and on-the-go",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <h3>Streamlined mobile payments</h3>
                        </div>
                        <p>
                            Experience seamless transactions with MyMonty through Google Pay. Effortlessly make secure payments in-store, online, and on-the-go.  
                        </p>
                    </div>
                `,
                icon: "google-and-apple-pay",
                image: "google-and-apple-pay"
            },
            {
                title: "Qr P2P Payments",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Instant Transactions, Just Scan and Pay</span>Unlock the power of QR Payments for quick, hassle-free peer-to-peer transactions. Simply scan, enter the amount, and authorize the transaction in seconds",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <h3>Instant transactions, just scan and pay</h3>
                        </div>
                        <p>
                            Unlock the power of QR Payments for quick, hassle-free peer-to-peer transactions. Simply scan, enter the amount, and authorize the transaction in seconds. 
                        </p>
                    </div>
                `,
                icon: "qr-p2p-payments",
                image: "qr-p2p-payments"
            },
            {
                title: "Payment Link",
                excerpt: "<span class='block font-AeonikMedium mb-2'>Effortless Transactions at Your Fingertips</span>Request or accept payments with ease using MyMonty's Payment Link feature. Share personalized payment links for fast and convenient transactions anytime, anywhere.",
                description: `
                    <div class="flex flex-col gap-4">
                        <div class="flex items-baseline gap-2">
                            <h3>Effortless transactions at your fingertips</h3>
                        </div>
                        <p>
                            Request or accept payments with ease using MyMonty's Payment Link feature. Share personalized payment links for fast and convenient transactions anytime, anywhere.
                        </p>
                    </div>
                `,
                icon: "payment-link",
                image: "payment-link"
            }
        ]
    },
];
