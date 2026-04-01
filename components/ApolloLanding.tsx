import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const ApolloLanding: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    const whatsappNumber = "+8801XXXXXXXXX"; // Replace with actual WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=Hello%20Apollo%20Imperial%20Hospital!%20I%20would%20like%20to%20book%20an%20appointment.`;

    const services = [
        { icon: "🫀", title: "Cardiology", desc: "Advanced heart care with expert cardiologists" },
        { icon: "🧠", title: "Neurology", desc: "Comprehensive brain and spine treatments" },
        { icon: "🦴", title: "Orthopedics", desc: "Joint replacements and sports medicine" },
        { icon: "👶", title: "Pediatrics", desc: "Specialized care for children" },
        { icon: "🏥", title: "Emergency", desc: "24/7 emergency services" },
        { icon: "🔬", title: "Diagnostics", desc: "State-of-the-art lab facilities" },
    ];

    const stats = [
        { value: "500+", label: "Expert Doctors" },
        { value: "50+", label: "Specialties" },
        { value: "100K+", label: "Happy Patients" },
        { value: "24/7", label: "Emergency Care" },
    ];

    return (
        <div className="apollo-landing bg-background text-foreground font-sans overflow-x-hidden">
            {/* Floating WhatsApp Button */}
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-semibold hidden sm:block">Chat with Us</span>
            </motion.a>

            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">A</span>
                        </div>
                        <div>
                            <span className="font-bold text-lg tracking-tight">Apollo Imperial</span>
                            <span className="text-muted-foreground text-sm block leading-none">Chittagong</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
                        <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
                        <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            Book Appointment
                        </a>
                    </div>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
                            className="md:hidden bg-background border-t border-border overflow-hidden"
                        >
                            <div className="px-6 py-4 flex flex-col gap-4">
                                <a href="#services" className="text-sm font-medium py-2">Services</a>
                                <a href="#about" className="text-sm font-medium py-2">About</a>
                                <a href="#contact" className="text-sm font-medium py-2">Contact</a>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold text-center"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <motion.section 
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Now Open in Chittagong
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
                            World-Class
                            <br />
                            <span className="text-primary">Healthcare</span>
                            <br />
                            At Your Fingertips
                        </h1>
                        
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            Experience seamless healthcare through WhatsApp. Book appointments, consult doctors, and manage your health journey — all in one chat.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#25D366]/20 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Start on WhatsApp
                            </motion.a>
                            <a
                                href="#services"
                                className="px-8 py-4 rounded-full text-lg font-medium border border-border hover:bg-muted transition-colors"
                            >
                                Explore Services
                            </a>
                        </div>
                    </motion.div>

                    {/* QR Code Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-xl mx-auto shadow-xl"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="bg-white p-4 rounded-2xl shadow-inner">
                                {/* WhatsApp QR Code Placeholder - Replace with actual QR */}
                                <div className="w-40 h-40 bg-gradient-to-br from-foreground to-foreground/80 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                                        <div className="grid grid-cols-7 gap-[2px] p-2">
                                            {Array.from({ length: 49 }).map((_, i) => (
                                                <div 
                                                    key={i} 
                                                    className={`w-[6px] h-[6px] rounded-[1px] ${
                                                        Math.random() > 0.5 ? 'bg-foreground' : 'bg-transparent'
                                                    }`}
                                                    style={{ 
                                                        backgroundColor: [0, 1, 2, 6, 7, 8, 14, 42, 43, 44, 48, 49].includes(i) 
                                                            ? 'currentColor' 
                                                            : Math.random() > 0.5 ? 'currentColor' : 'transparent'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center shadow-lg">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold mb-2">Scan to Connect</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Scan this QR code with your phone camera to start a conversation with our patient care team on WhatsApp.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-muted-foreground font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Our <span className="text-primary">Specialties</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Comprehensive healthcare services delivered by world-renowned specialists
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500 cursor-pointer"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground">{service.desc}</p>
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
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Your Health Journey, One Chat Away
                            </h2>
                            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                                No apps to download. No accounts to create. Just message us on WhatsApp and experience healthcare reimagined.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Book appointments instantly",
                                    "Receive test reports on chat",
                                    "Get medication reminders",
                                    "24/7 patient support",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold mt-10 hover:bg-white/90 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Message Us Now
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Phone Mockup */}
                            <div className="relative mx-auto w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-10" />
                                <div className="w-full h-full bg-[#ECE5DD] rounded-[2.5rem] overflow-hidden">
                                    {/* WhatsApp Header */}
                                    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">AI</div>
                                        <div>
                                            <div className="font-semibold text-sm">Apollo Imperial</div>
                                            <div className="text-xs opacity-80">Online</div>
                                        </div>
                                    </div>
                                    {/* Chat Messages */}
                                    <div className="p-4 space-y-3">
                                        <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
                                            <p className="text-sm text-gray-800">Hello! Welcome to Apollo Imperial Hospital. How can I assist you today? 🏥</p>
                                            <p className="text-[10px] text-gray-500 text-right mt-1">10:30 AM</p>
                                        </div>
                                        <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none px-4 py-2 max-w-[80%] ml-auto shadow-sm">
                                            <p className="text-sm text-gray-800">{"I'd like to book an appointment with a cardiologist"}</p>
                                            <p className="text-[10px] text-gray-500 text-right mt-1">10:31 AM</p>
                                        </div>
                                        <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-[80%] shadow-sm">
                                            <p className="text-sm text-gray-800">{"Of course! I can help you with that. Dr. Ahmed Khan is available tomorrow at 2 PM. Would you like to confirm this slot? ✨"}</p>
                                            <p className="text-[10px] text-gray-500 text-right mt-1">10:31 AM</p>
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Why Choose <span className="text-primary">Apollo Imperial</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {"Chittagong's most advanced multi-specialty hospital with a patient-first approach"}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "World-Class Infrastructure",
                                desc: "State-of-the-art facilities equipped with the latest medical technology and equipment.",
                                icon: "🏛️"
                            },
                            {
                                title: "Expert Medical Team",
                                desc: "500+ doctors including internationally trained specialists and surgeons.",
                                icon: "👨‍⚕️"
                            },
                            {
                                title: "Patient-Centric Care",
                                desc: "Personalized treatment plans and 24/7 support through WhatsApp.",
                                icon: "💚"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center p-8"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & CTA Section */}
            <section id="contact" className="py-24 px-6 bg-muted/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Ready to Experience Better Healthcare?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                            Start your health journey today. Message us on WhatsApp and our patient care team will assist you within minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Start Conversation
                            </motion.a>
                        </div>

                        {/* QR Code */}
                        <div className="bg-card border border-border rounded-3xl p-8 max-w-md mx-auto">
                            <div className="flex flex-col items-center gap-4">
                                <div className="bg-white p-4 rounded-2xl shadow-inner">
                                    <div className="w-32 h-32 bg-gradient-to-br from-foreground to-foreground/80 rounded-xl flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                                            <div className="grid grid-cols-5 gap-[2px] p-2">
                                                {Array.from({ length: 25 }).map((_, i) => (
                                                    <div 
                                                        key={i} 
                                                        className="w-[5px] h-[5px] rounded-[1px] bg-foreground"
                                                        style={{ 
                                                            opacity: Math.random() > 0.4 ? 1 : 0
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center shadow-lg">
                                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">Scan to chat on WhatsApp</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">A</span>
                            </div>
                            <div>
                                <span className="font-bold">Apollo Imperial Hospital</span>
                                <span className="text-muted-foreground text-sm block">Chittagong, Bangladesh</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span>© 2026 Apollo Imperial Hospital</span>
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
