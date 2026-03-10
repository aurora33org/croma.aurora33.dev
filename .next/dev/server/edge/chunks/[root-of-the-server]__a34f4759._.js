(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__a34f4759._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/.worktrees/pro-version/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/middleware.js [middleware-edge] (ecmascript)");
;
const middleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["withAuth"])({
    pages: {
        signIn: "/auth/login"
    }
});
const config = {
    matcher: [
        "/admin/:path*",
        "/dashboard/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a34f4759._.js.map