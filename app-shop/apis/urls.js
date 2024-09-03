export const urls = {
    auth: {
        login: "/auth/login",
        signup: "/auth/signup",
    },
    user : "/user" ,
    sneakers: {
        sneaker: "/sneaker?page=1&limit=10",
        sneaker2: "/sneaker?page=2&limit=10",
        sneaker3: "/sneaker?page=3&limit=10",
        sneaker4: "/sneaker?page=4&limit=10",
        sneaker5: "/sneaker?page=5&limit=10",
        item : (id) => `/sneaker/item/${id}`,
        brands : "/sneaker/brands"
    },
}