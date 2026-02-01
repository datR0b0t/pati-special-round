"use client";

import Image from "next/image";

export function WhatsInside() {
    return (
        <section className="w-full">
            {/* Desktop: Show single image */}
            <div className="hidden md:block">
                <img
                    src="https://im8health.com/cdn/shop/files/desktop_insidebanner_yes-sub_bstack-std_0de67bb6-d9f6-4c20-90d3-fa2ad13df6a0.jpg?v=1759884529&width=2048"
                    alt="What's Inside - Desktop"
                    className="w-full h-auto"
                />
            </div>
            <div className="md:hidden">
                <img
                    src="https://im8health.com/cdn/shop/files/mobile_insidebanner_yes-sub_bstack-std_38fed0de-5061-4c31-ae8c-d62ecee6c9ae.jpg?v=1759884529&width=832"
                    alt="What's Inside - Mobile"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}
