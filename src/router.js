import Index from "views/index"

export default function (router) {
    router.map({
        "/": {
            component: Index
        },
        "*": {
            component: Index
        },
    });
}
