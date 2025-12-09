const app = {
    currentType: 'flights',
    carouselInterval: null,

    init() {
        this.updateHeader();
        this.renderLandingPage();
    },

    updateHeader() {
        const user = auth.getCurrentUser();
        const actionsDiv = document.getElementById('user-actions');

        if (user) {
            actionsDiv.innerHTML = `
                <div class="user-menu">
                    <span>Hi, ${user.name.split(' ')[0]}</span>
                    <button class="btn-logout" onclick="app.handleLogout()">Logout</button>
                </div>
            `;
        } else {
            actionsDiv.innerHTML = `
                <button class="btn-secondary" onclick="app.renderLogin()">Login / Signup</button>
            `;
        }
    },

    handleLogout() {
        auth.logout();
        this.updateHeader();
        this.renderLandingPage();
    },

    renderLandingPage() {
        const appDiv = document.getElementById('app');

        // Reset Nav Active State
        document.querySelectorAll('.main-nav a').forEach(el => el.classList.remove('active'));

        appDiv.innerHTML = `
            <div class="container">
                <section class="hero-section" style="height: 400px; margin-bottom: 30px; border-radius: 8px; overflow: hidden;">
                    <!-- Carousel Container -->
                    <div class="carousel-container" id="hero-carousel">
                        <!-- Slides will be injected by startCarousel -->
                    </div>
                    <div class="hero-overlay"></div>
                    
                    <div class="landing-hero-content" style="position: relative; z-index: 2; text-align: center; color: white; padding-top: 100px;">
                        <h1 style="font-size: 3em; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Explore the World with TripEasy</h1>
                        <p style="font-size: 1.2em; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Book Flights, Trains, and Buses at the lowest prices.</p>
                    </div>
                </section>
                
                <div class="service-cards">
                    <a onclick="app.renderHome('flights')" class="service-card">
                        <i class="fas fa-plane"></i>
                        <h3>Book Flights</h3>
                        <p>Domestic & International</p>
                    </a>
                    <a onclick="app.renderHome('trains')" class="service-card">
                        <i class="fas fa-train"></i>
                        <h3>Book Trains</h3>
                        <p>Fast & Comfortable</p>
                    </a>
                    <a onclick="app.renderHome('buses')" class="service-card">
                        <i class="fas fa-bus"></i>
                        <h3>Book Buses</h3>
                        <p>AC & Non-AC Coaches</p>
                    </a>
                </div>
            </div>
        `;

        // Start Carousel
        this.startCarousel();
    },

    renderContact() {
        const appDiv = document.getElementById('app');
        // Reset Nav Active State
        document.querySelectorAll('.main-nav a').forEach(el => el.classList.remove('active'));
        // Highlight Contact
        const navLinks = document.querySelectorAll('.main-nav a');
        if (navLinks.length > 3) navLinks[3].classList.add('active');

        appDiv.innerHTML = `
            <div class="container contact-container">
                <h2 style="margin-bottom: 30px; text-align: center; color: var(--secondary-color);">Contact Us</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Address</h3>
                                <p>123 Travel Street, Connaught Place,<br>New Delhi, India - 110001</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                                <p>011 - 2345 6789</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>support@tripeasy.com</p>
                                <p>bookings@tripeasy.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-section">
                        <h3>Send us a message</h3>
                        <form class="auth-form" onsubmit="alert('Message sent successfully!'); return false;">
                            <input type="text" placeholder="Your Name" required>
                            <input type="email" placeholder="Your Email" required>
                            <textarea placeholder="Your Message" style="padding: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; min-height: 100px;" required></textarea>
                            <button type="submit" class="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    renderLogin() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="modern-auth-container">
                <div class="auth-left">
                    <h2>Welcome Back!</h2>
                    <p>Login to access your bookings and exclusive deals.</p>
                </div>
                <div class="auth-right">
                    <h2>User Login</h2>
                    <form class="modern-form" onsubmit="app.handleLoginSubmit(event)">
                        <div class="form-group input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input type="email" id="login-email" placeholder="Email Address" required>
                        </div>
                        <div class="form-group input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="login-password" placeholder="Password" required>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-bottom: 20px; font-size: 0.9em; color: #777;">
                            <label style="display:flex; align-items:center; gap:5px;"><input type="checkbox" style="width: auto;"> Remember me</label>
                            <a href="#" style="color:var(--text-color);">Forgot password?</a>
                        </div>
                        <button type="submit" class="btn-primary">LOGIN</button>
                    </form>
                    <div class="auth-footer">
                        <p>Don't have an account? <a onclick="app.renderSignup()">Sign Up</a></p>
                    </div>
                </div>
            </div>
        `;
    },

    renderSignup() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="modern-auth-container">
                <div class="auth-left">
                    <h2>Join TripEasy</h2>
                    <p>Create an account to start your journey with us.</p>
                </div>
                <div class="auth-right">
                    <h2>Create Account</h2>
                    <form class="modern-form" onsubmit="app.handleSignupSubmit(event)">
                        <div class="form-group input-with-icon">
                            <i class="fas fa-user"></i>
                            <input type="text" id="signup-name" placeholder="Full Name" required>
                        </div>
                        <div class="form-group input-with-icon">
                            <i class="fas fa-envelope"></i>
                            <input type="email" id="signup-email" placeholder="Email Address" required>
                        </div>
                        <div class="form-group input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="signup-password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn-primary">SIGN UP</button>
                    </form>
                    <div class="auth-footer">
                        <p>Already have an account? <a onclick="app.renderLogin()">Login</a></p>
                    </div>
                </div>
            </div>
        `;
    },

    handleLoginSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const result = auth.login(email, password);
        if (result.success) {
            this.updateHeader();
            this.renderLandingPage();
        } else {
            alert(result.message);
        }
    },

    handleSignupSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const result = auth.register(name, email, password);
        if (result.success) {
            this.updateHeader();
            this.renderLandingPage();
            alert("Registration Successful!");
        } else {
            alert(result.message);
        }
    },

    renderHome(type) {
        this.currentType = type;
        const appDiv = document.getElementById('app');

        // Update Nav Active State
        document.querySelectorAll('.main-nav a').forEach(el => el.classList.remove('active'));
        const navIndex = type === 'flights' ? 0 : type === 'trains' ? 1 : 2;
        if (document.querySelectorAll('.main-nav a')[navIndex]) {
            document.querySelectorAll('.main-nav a')[navIndex].classList.add('active');
        }

        // Hero Content
        let heroTitle = "Book International and Domestic Flights";
        if (type === 'trains') { heroTitle = "Book Train Tickets Online"; }
        if (type === 'buses') { heroTitle = "Online Bus Ticket Booking"; }

        // Next Buses Section Logic
        let extraSection = '';
        if (type === 'buses') {
            const fiveHoursFromNow = new Date();
            fiveHoursFromNow.setHours(fiveHoursFromNow.getHours() + 5);
            // Mock logic: showing first 3 buses as "Upcoming"
            // Ensure mockData is available
            const buses = (typeof mockData !== 'undefined' && mockData.buses) ? mockData.buses : [];
            const nextBuses = buses.slice(0, 3);

            if (nextBuses.length > 0) {
                extraSection = `
                    <div class="next-buses-section">
                        <h3 style="margin-bottom: 15px; color: var(--secondary-color);"><i class="fas fa-clock"></i> Next Buses Departing Soon</h3>
                        <div style="display: grid; gap: 10px;">
                            ${nextBuses.map(bus => `
                                <div style="display: flex; justify-content: space-between; padding: 10px; background: white; border: 1px solid #eee; border-radius: 4px;">
                                    <div><strong>${bus.operator}</strong> (${bus.type})</div>
                                    <div>${bus.from} <i class="fas fa-arrow-right"></i> ${bus.to}</div>
                                    <div style="font-weight: bold; color: var(--primary-color);">${bus.dep}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }

        appDiv.innerHTML = `
            <section class="hero-section">
                <!-- Carousel Container -->
                <div class="carousel-container" id="hero-carousel">
                    <!-- Slides will be injected by startCarousel -->
                </div>
                <div class="hero-overlay"></div>

                <div class="search-widget">
                    <div class="widget-tabs">
                        <button class="tab-btn ${type === 'flights' ? 'active' : ''}" onclick="app.renderHome('flights')">Flights</button>
                        <button class="tab-btn ${type === 'trains' ? 'active' : ''}" onclick="app.renderHome('trains')">Trains</button>
                        <button class="tab-btn ${type === 'buses' ? 'active' : ''}" onclick="app.renderHome('buses')">Buses</button>
                    </div>
                    <h2 style="margin-bottom: 20px; font-size: 24px;">${heroTitle}</h2>
                    <form class="search-form" onsubmit="app.handleSearch(event)">
                        <div class="form-group">
                            <label>From</label>
                            <select id="from-city">
                                ${cities.map(c => `<option value="${c}">${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>To</label>
                            <select id="to-city">
                                <option value="" disabled selected>Select Destination</option>
                                ${cities.map(c => `<option value="${c}">${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Date</label>
                            <input type="date" required>
                        </div>
                        <button type="submit" class="btn-search">Search</button>
                    </form>
                    ${extraSection}
                </div>
            </section>
            <section style="padding: 40px 20px; text-align: center;">
                <h2 style="margin-bottom: 20px;">Why Book With Us?</h2>
                <div style="display: flex; justify-content: center; gap: 40px;">
                    <div>
                        <i class="fas fa-tags" style="font-size: 40px; color: var(--primary-color); margin-bottom: 10px;"></i>
                        <h3>Best Offers</h3>
                        <p>Get the best deals on your bookings.</p>
                    </div>
                    <div>
                        <i class="fas fa-shield-alt" style="font-size: 40px; color: var(--primary-color); margin-bottom: 10px;"></i>
                        <h3>Safe & Secure</h3>
                        <p>100% secure payment systems.</p>
                    </div>
                    <div>
                        <i class="fas fa-headset" style="font-size: 40px; color: var(--primary-color); margin-bottom: 10px;"></i>
                        <h3>24/7 Support</h3>
                        <p>We are here to help you anytime.</p>
                    </div>
                </div>
            </section>
        `;

        // Start Carousel
        this.startCarousel();

        // Set default "To" city different from "From"
        const fromSelect = document.getElementById('from-city');
        const toSelect = document.getElementById('to-city');
        if (fromSelect.value === 'Delhi') toSelect.value = 'Mumbai';
    },

    startCarousel() {
        const images = [
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Plane
            'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Train
            'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'  // Bus
        ];

        const container = document.getElementById('hero-carousel');
        if (!container) return; // Guard clause

        // Clear existing interval if any
        if (this.carouselInterval) clearInterval(this.carouselInterval);

        // Inject slides
        container.innerHTML = images.map((img, index) =>
            `<div class="carousel-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${img}')"></div>`
        ).join('');

        let currentIndex = 0;
        const slides = container.querySelectorAll('.carousel-slide');

        this.carouselInterval = setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 3000); // Change every 3 seconds
    },

    handleSearch(e) {
        e.preventDefault();
        const from = document.getElementById('from-city').value;
        const to = document.getElementById('to-city').value;

        if (from === to) {
            alert("Source and Destination cannot be the same!");
            return;
        }

        // Show Loading Animation
        this.showLoading(this.currentType, () => {
            const results = searchData(this.currentType, from, to);
            this.renderResults(results, from, to);
        });
    },

    showLoading(type, callback) {
        const overlay = document.getElementById('loading-overlay');
        const iconContainer = document.getElementById('loading-icon-container');
        const loadingText = document.getElementById('loading-text');

        overlay.classList.remove('hidden');

        // Reset content
        iconContainer.innerHTML = '';
        iconContainer.className = '';

        let iconClass = 'fa-plane';
        let animClass = 'anim-plane';
        let text = "Finding best flights...";

        if (type === 'trains') {
            iconClass = 'fa-train';
            animClass = 'anim-train';
            text = "Finding best trains...";
        } else if (type === 'buses') {
            iconClass = 'fa-bus';
            animClass = 'anim-bus';
            text = "Finding best buses...";
        }

        iconContainer.innerHTML = `<i class="fas ${iconClass} ${animClass}"></i>`;
        loadingText.innerText = text;

        // 5 seconds delay
        setTimeout(() => {
            overlay.classList.add('hidden');
            callback();
        }, 5000);
    },

    renderResults(results, from, to) {
        const appDiv = document.getElementById('app');

        let html = `
            <div class="container results-container">
                <h2 style="margin-bottom: 20px;">Available ${this.currentType} from ${from} to ${to}</h2>
        `;

        if (results.length === 0) {
            html += `<div style="text-align: center; padding: 40px;">
                        <h3>No ${this.currentType} found for this route.</h3>
                        <p>Try searching between Delhi and Mumbai for demo data.</p>
                        <button onclick="app.renderHome('${this.currentType}')" class="btn-secondary" style="margin-top: 20px;">Go Back</button>
                     </div>`;
        } else {
            results.forEach(item => {
                let icon = this.currentType === 'flights' ? 'fa-plane' : this.currentType === 'trains' ? 'fa-train' : 'fa-bus';
                let name = item.airline || item.name || item.operator;
                let code = item.code || item.type || '';

                html += `
                    <div class="result-card">
                        <div class="carrier-info">
                            <div class="carrier-logo"><i class="fas ${icon}"></i></div>
                            <div>
                                <h4>${name}</h4>
                                <p style="font-size: 12px; color: #999;">${code}</p>
                            </div>
                        </div>
                        <div class="flight-time">
                            <h3>${item.dep}</h3>
                            <p>${item.from}</p>
                        </div>
                        <div class="duration-line">
                            <span>${item.duration}</span>
                            <div class="line"></div>
                        </div>
                        <div class="flight-time">
                            <h3>${item.arr}</h3>
                            <p>${item.to}</p>
                        </div>
                        <div class="price-section">
                            <span class="price">₹${item.price}</span>
                            <button class="btn-book" onclick="app.renderBooking('${item.id}', '${this.currentType}')">Book Now</button>
                        </div>
                    </div>
                `;
            });
        }

        html += `</div>`;
        appDiv.innerHTML = html;
    },

    renderBooking(id, type) {
        const item = getItemById(type, id);
        const appDiv = document.getElementById('app');

        let name = item.airline || item.name || item.operator;
        let code = item.code || item.type || '';

        appDiv.innerHTML = `
            <div class="container booking-container">
                <h2 style="margin-bottom: 20px;">Review your booking</h2>
                <div class="booking-summary">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3>${item.from} <i class="fas fa-arrow-right"></i> ${item.to}</h3>
                            <p>${name} | ${code}</p>
                        </div>
                        <div style="text-align: right;">
                            <p>Departure: <strong>${item.dep}</strong></p>
                            <p>Duration: ${item.duration}</p>
                        </div>
                    </div>
                </div>

                <h3>Traveller Details</h3>
                <form class="passenger-form" onsubmit="app.processPayment(event)">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name" required>
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="number" placeholder="Age" required>
                    </div>
                    <div class="form-group full-width">
                        <label>Email Address</label>
                        <input type="email" placeholder="booking@example.com" required>
                    </div>
                    <div class="form-group full-width">
                        <label>Mobile Number</label>
                        <input type="tel" placeholder="10 digit mobile number" required>
                    </div>
                    
                    <div class="full-width" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
                        <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: bold; margin-bottom: 10px;">
                            <span>Total Amount:</span>
                            <span>₹${item.price}</span>
                        </div>
                    </div>

                    <button type="submit" class="btn-pay">Pay & Book</button>
                </form>
            </div>
        `;
    },

    processPayment(e) {
        e.preventDefault();
        // Simulate payment processing
        const btn = e.target.querySelector('.btn-pay');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;

        setTimeout(() => {
            this.renderConfirmation();
        }, 2000);
    },

    renderConfirmation() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="container confirmation-container">
                <i class="fas fa-check-circle success-icon"></i>
                <h2>Booking Confirmed!</h2>
                <p>Your ticket has been booked successfully.</p>
                <p>A confirmation email has been sent to your email address.</p>
                <button class="btn-secondary" onclick="app.renderLandingPage()" style="margin-top: 20px;">Back to Home</button>
            </div>
        `;
    }
};
