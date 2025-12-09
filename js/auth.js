const auth = {
    init() {
        // Seed default user if not exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const defaultUser = users.find(u => u.email === 'sabeena.viklar@gmail.com');

        if (!defaultUser) {
            users.push({
                name: 'Sabeena Viklar',
                email: 'sabeena.viklar@gmail.com',
                password: 'Sabeena123' // In a real app, this would be hashed
            });
            localStorage.setItem('users', JSON.stringify(users));
        }
    },

    login(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: 'Invalid email or password' };
    },

    register(name, email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto login after register
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        return { success: true, user: newUser };
    },

    logout() {
        localStorage.removeItem('currentUser');
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
};

auth.init();
