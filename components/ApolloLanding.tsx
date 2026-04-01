import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Medical Icons as clean SVG components
const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BrainIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5l7-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BabyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EmergencyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MicroscopeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BuildingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StethoscopeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4M22 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ApolloLanding: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const whatsappNumber = "+8801XXXXXXXXX";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=Hello%20Apollo%20Imperial%20Hospital!%20I%20would%20like%20to%20book%20an%20appointment.`;

    const services = [
        { icon: HeartIcon, title: "Cardiology", desc: "Advanced cardiac care with interventional procedures and heart failure management" },
        { icon: BrainIcon, title: "Neurology", desc: "Comprehensive brain, spine, and nervous system treatments" },
        { icon: BoneIcon, title: "Orthopedics", desc: "Joint replacements, sports medicine, and trauma care" },
        { icon: BabyIcon, title: "Pediatrics", desc: "Specialized healthcare for infants, children, and adolescents" },
        { icon: EmergencyIcon, title: "Emergency Care", desc: "Round-the-clock emergency services with rapid response" },
        { icon: MicroscopeIcon, title: "Diagnostics", desc: "State-of-the-art laboratory and imaging facilities" },
    ];

    const stats = [
        { value: "500+", label: "Expert Doctors" },
        { value: "50+", label: "Specialties" },
        { value: "100K+", label: "Patients Served" },
        { value: "24/7", label: "Emergency Care" },
    ];

    const features = [
        { icon: BuildingIcon, title: "World-Class Infrastructure", desc: "State-of-the-art facilities with the latest medical technology and international standards." },
        { icon: StethoscopeIcon, title: "Expert Medical Team", desc: "500+ doctors including internationally trained specialists and surgeons." },
        { icon: ShieldIcon, title: "Patient-Centric Care", desc: "Personalized treatment plans with 24/7 support through WhatsApp." },
    ];

    const easing = [0.22, 1, 0.36, 1];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
            {/* Floating WhatsApp Button */}
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="font-medium text-sm hidden sm:block">Chat with Us</span>
            </motion.a>

            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-40 glass"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: easing }}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">A</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-semibold text-foreground">Apollo Imperial</span>
                            <span className="text-muted-foreground text-xs block">Chittagong</span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
                        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
                        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            Book Appointment
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 -mr-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: easing }}
                            className="md:hidden bg-background border-t border-border overflow-hidden"
                        >
                            <div className="px-6 py-4 flex flex-col gap-1">
                                <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm font-medium">Services</a>
                                <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm font-medium">About</a>
                                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm font-medium">Contact</a>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium text-center mt-2"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center pt-20 pb-16 px-6 relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-secondary/[0.05] rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: easing }}
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-soft" />
                                Now Open in Chittagong
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
                                World-Class Healthcare,{' '}
                                <span className="text-primary">One Message Away</span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                                Experience seamless healthcare through WhatsApp. Book appointments, consult doctors, and manage your health journey — all in one conversation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Start on WhatsApp
                                </motion.a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-medium border border-border hover:bg-muted transition-colors"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </motion.div>

                        {/* QR Code Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: easing }}
                            className="hidden lg:block"
                        >
                            <div className="bg-card border border-border rounded-3xl p-10 shadow-sm max-w-sm ml-auto">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-muted p-5 rounded-2xl mb-6">
                                        {/* QR Code Placeholder */}
                                        <div className="w-44 h-44 bg-white rounded-xl flex items-center justify-center relative p-3">
                                            <div className="absolute inset-3 grid grid-cols-11 grid-rows-11 gap-px">
                                                {Array.from({ length: 121 }).map((_, i) => {
                                                    const row = Math.floor(i / 11);
                                                    const col = i % 11;
                                                    const isCorner = (row < 3 && col < 3) || (row < 3 && col > 7) || (row > 7 && col < 3);
                                                    const isPattern = isCorner || Math.random() > 0.55;
                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`rounded-[1px] ${isPattern ? 'bg-foreground' : 'bg-transparent'}`}
                                                        />
                                                    );
                                                })}
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center shadow-md">
                                                    <WhatsAppIcon className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Scan to Connect</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Open your camera app and scan to start a conversation with our patient care team.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-muted/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: easing }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: easing }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Our Specialties
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Comprehensive healthcare services delivered by world-renowned specialists
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: easing }}
                                className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WhatsApp Experience Section */}
            <section className="py-24 px-6 bg-primary text-primary-foreground">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, ease: easing }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Your Health Journey, One Chat Away
                            </h2>
                            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                                No apps to download. No accounts to create. Just message us on WhatsApp and experience healthcare reimagined.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    "Book appointments instantly",
                                    "Receive test reports on chat",
                                    "Get medication reminders",
                                    "24/7 patient support",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                                            <CheckIcon className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-primary px-7 py-4 rounded-full font-semibold hover:bg-white/95 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                                Message Us Now
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: easing }}
                            className="relative hidden lg:flex justify-center"
                        >
                            {/* Phone Mockup */}
                            <div className="relative w-64 h-[520px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-xl z-10" />
                                <div className="w-full h-full bg-[#ECE5DD] rounded-[2rem] overflow-hidden">
                                    {/* WhatsApp Header */}
                                    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">AI</div>
                                        <div>
                                            <div className="font-semibold text-sm">Apollo Imperial</div>
                                            <div className="text-[10px] opacity-80">Online</div>
                                        </div>
                                    </div>
                                    {/* Chat Messages */}
                                    <div className="p-3 space-y-2.5">
                                        <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                                            <p className="text-xs text-gray-800">Hello! Welcome to Apollo Imperial Hospital. How can I assist you today?</p>
                                            <p className="text-[9px] text-gray-500 text-right mt-1">10:30 AM</p>
                                        </div>
                                        <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-3 py-2 max-w-[85%] ml-auto shadow-sm">
                                            <p className="text-xs text-gray-800">{"I'd like to book an appointment with a cardiologist"}</p>
                                            <p className="text-[9px] text-gray-500 text-right mt-1">10:31 AM</p>
                                        </div>
                                        <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                                            <p className="text-xs text-gray-800">{"Of course! Dr. Ahmed Khan is available tomorrow at 2 PM. Would you like to confirm?"}</p>
                                            <p className="text-[9px] text-gray-500 text-right mt-1">10:31 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: easing }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Why Choose Apollo Imperial
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            {"Chittagong's most advanced multi-specialty hospital with a patient-first approach"}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: easing }}
                                className="text-center p-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section id="contact" className="py-24 px-6 bg-muted/50">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: easing }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Ready to Experience Better Healthcare?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
                            Start your health journey today. Message us on WhatsApp and our patient care team will assist you within minutes.
                        </p>

                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow mb-12"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            Start Conversation
                        </motion.a>

                        {/* QR Code */}
                        <div className="bg-card border border-border rounded-2xl p-6 max-w-xs mx-auto">
                            <div className="flex flex-col items-center">
                                <div className="bg-muted p-4 rounded-xl mb-4">
                                    <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center relative p-2">
                                        <div className="absolute inset-2 grid grid-cols-9 grid-rows-9 gap-px">
                                            {Array.from({ length: 81 }).map((_, i) => {
                                                const row = Math.floor(i / 9);
                                                const col = i % 9;
                                                const isCorner = (row < 2 && col < 2) || (row < 2 && col > 6) || (row > 6 && col < 2);
                                                const isPattern = isCorner || Math.random() > 0.5;
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`rounded-[1px] ${isPattern ? 'bg-foreground' : 'bg-transparent'}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-7 h-7 bg-[#25D366] rounded-md flex items-center justify-center shadow">
                                                <WhatsAppIcon className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">Scan to chat on WhatsApp</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 px-6 border-t border-border bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">A</span>
                            </div>
                            <div>
                                <span className="font-semibold text-sm">Apollo Imperial Hospital</span>
                                <span className="text-muted-foreground text-xs block">Chittagong, Bangladesh</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-xs text-muted-foreground">
                            <span>2026 Apollo Imperial Hospital</span>
                            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
                            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ApolloLanding;
