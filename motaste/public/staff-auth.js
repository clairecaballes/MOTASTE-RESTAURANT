const staffCredentials = {
    Admin: [
        { email: 'admin@motaste.com', password: 'admin123' }
    ],
    Cashier: [
        { email: 'cashier@motaste.com', password: 'cashier123' }
    ],
    'Inventory Manager': [
        { email: 'inventory@motaste.com', password: 'inventory123' }
    ]
};

function validateStaffLogin(role, email, password, credentials = staffCredentials) {
    const normalizedRole = role || '';
    const normalizedEmail = (email || '').trim().toLowerCase();
    const matchingRoleCredentials = credentials[normalizedRole] || [];

    return matchingRoleCredentials.some((entry) => {
        return entry.email.toLowerCase() === normalizedEmail && entry.password === password;
    });
}

if (typeof window !== 'undefined') {
    window.validateStaffLogin = validateStaffLogin;
}

if (typeof module !== 'undefined') {
    module.exports = {
        staffCredentials,
        validateStaffLogin
    };
}
