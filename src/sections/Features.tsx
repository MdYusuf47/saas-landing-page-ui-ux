const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section>
            <div className="container">
                <h2>
                    Where power meets <span>simplicity</span>
                </h2>
                <div>
                    <div>
                        <div></div>
                        <div>
                            <h3>Real-time Collaboration</h3>
                            <p>
                                Work together seamlessly with conflict-free team
                                editing
                            </p>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <h3>Interactive Prototyping</h3>
                            <p>
                                Engage your client with prototype that react to
                                user actions
                            </p>
                        </div>
                    </div>
                    <div>
                    <div></div>
                        <div>
                            <h3>Keyboard Quick Actions</h3>
                            <p>
                                Powerful commands to help you create designs more quickly
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {features.map((feature) => (
                        <div key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
