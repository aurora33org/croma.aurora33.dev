module.exports = [
"[project]/.worktrees/pro-version/components/UserProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfile",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function UserProfile() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!session?.user) return null;
    const getTierColor = (tier)=>{
        return tier === "PRO" ? "text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-400";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                "aria-label": "User menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-text dark:text-text-dark truncate max-w-[120px]",
                                children: session.user.email?.split("@")[0]
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs ${getTierColor(session.user.tier || "FREE")}`,
                                children: [
                                    session.user.tier || "FREE",
                                    " tier"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-text dark:text-text-dark",
                                children: session.user.email
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs mt-1 ${getTierColor(session.user.tier || "FREE")}`,
                                children: [
                                    session.user.tier === "PRO" ? "Professional" : "Free",
                                    " Tier"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                                redirect: true,
                                callbackUrl: "/"
                            });
                            setIsOpen(false);
                        },
                        className: "w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-text dark:text-text-dark transition-colors text-sm",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/components/UserProfile.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/LanguageToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/UserProfile.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Navigation() {
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const themeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only initialize once on client mount
        if (initialized.current) return;
        initialized.current = true;
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isCurrentlyDark = savedTheme ? savedTheme === 'dark' : prefersDark;
        // Store initial theme
        themeRef.current = isCurrentlyDark ? 'dark' : 'light';
        // Apply theme class to HTML element
        if (isCurrentlyDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setIsDark(isCurrentlyDark);
    }, []);
    const handleThemeToggle = ()=>{
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        themeRef.current = newIsDark ? 'dark' : 'light';
        // Apply theme class to HTML element and save to localStorage
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 border-b border-gray-200 dark:border-gray-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://croma.aurora33.dev",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold hover:opacity-80 transition-opacity",
                        style: {
                            fontFamily: '"Kangge", sans-serif',
                            fontSize: 'calc(2.25rem * 0.8)',
                            marginBottom: '-0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "croma."
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-text dark:text-text-dark",
                                children: [
                                    "aurora",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                        children: "33"
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                                        lineNumber: 58,
                                        columnNumber: 111
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                                lineNumber: 58,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        session?.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserProfile"], {}, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                            lineNumber: 65,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleThemeToggle,
                            className: `relative inline-flex items-center justify-between h-8 w-16 px-1 rounded-full transition-all duration-500 ${isDark ? 'bg-contrast' : 'bg-gray-300'}`,
                            "aria-label": "Toggle dark mode",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    size: 16,
                                    className: "flex-shrink-0 transition-colors text-black relative z-10 ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute inline-block h-6 w-6 transform rounded-full transition-all duration-500 ${isDark ? 'bg-black translate-x-8' : 'bg-white translate-x-0'}`
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    size: 16,
                                    className: `flex-shrink-0 transition-colors ${isDark ? 'text-white' : 'text-white'} relative z-10 mr-1`
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/Navigation.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TIER_LIMITS",
    ()=>TIER_LIMITS,
    "TIER_NAMES",
    ()=>TIER_NAMES,
    "config",
    ()=>config
]);
const config = {
    server: {
        port: parseInt(process.env.PORT || '3000', 10),
        nodeEnv: ("TURBOPACK compile-time value", "development") || 'development'
    },
    // Upload limits
    upload: {
        maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10),
        maxFiles: parseInt(process.env.MAX_FILES || '20', 10),
        allowedMimeTypes: [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp',
            'image/avif'
        ]
    },
    // Cleanup configuration
    cleanup: {
        interval: parseInt(process.env.CLEANUP_INTERVAL || '15', 10),
        fileTTL: parseInt(process.env.FILE_TTL || '3600', 10) // seconds (1 hour)
    },
    // Listmonk (optional)
    listmonk: {
        enabled: process.env.LISTMONK_ENABLED === 'true',
        url: process.env.LISTMONK_URL || '',
        apiKey: process.env.LISTMONK_API_KEY || '',
        listId: process.env.LISTMONK_LIST_ID || ''
    },
    // Storage
    storage: {
        baseDir: '/tmp/jobs'
    },
    // Supported formats
    supportedFormats: [
        'jpeg',
        'jpg',
        'png',
        'webp',
        'gif'
    ],
    outputFormats: [
        'webp',
        'jpeg',
        'png',
        'avif'
    ]
};
const TIER_LIMITS = {
    FREE: {
        MAX_FILES: 5,
        MAX_FILE_SIZE: 7 * 1024 * 1024,
        MAX_DAILY_USAGE: 6
    },
    PRO: {
        MAX_FILES: 15,
        MAX_FILE_SIZE: 12 * 1024 * 1024,
        MAX_DAILY_USAGE: 20
    }
};
const TIER_NAMES = [
    'FREE',
    'PRO'
];
}),
"[project]/.worktrees/pro-version/components/ImageUploader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageUploader",
    ()=>ImageUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ImageUploader({ onFilesSelected, onShowSettings }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('uploader');
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const userTier = session?.user?.tier || 'FREE';
    const limits = __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LIMITS"][userTier];
    const maxFileSize = limits.MAX_FILE_SIZE;
    const maxFiles = limits.MAX_FILES;
    const handleDragOver = (e)=>{
        e.preventDefault();
        setDragOver(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setDragOver(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };
    const handleFileSelect = (e)=>{
        const files = e.target.files ? Array.from(e.target.files) : [];
        handleFiles(files);
    };
    const handleFiles = (files)=>{
        setError(null);
        // Validate file types
        const validFiles = files.filter((file)=>[
                'image/jpeg',
                'image/jpg',
                'image/png',
                'image/webp',
                'image/gif'
            ].includes(file.type));
        if (validFiles.length === 0) {
            setError('No valid image files selected');
            return;
        }
        // Check file count
        if (validFiles.length > maxFiles) {
            setError(`Maximum ${maxFiles} files allowed for ${userTier} tier`);
            return;
        }
        // Check file sizes
        const oversizedFiles = validFiles.filter((file)=>file.size > maxFileSize);
        if (oversizedFiles.length > 0) {
            const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(0);
            setError(`File size exceeds ${maxSizeMB}MB limit for ${userTier} tier`);
            return;
        }
        if (validFiles.length > 0) {
            onFilesSelected(validFiles);
            onShowSettings();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full space-y-8",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                onClick: ()=>document.getElementById('file-input')?.click(),
                className: `bg-contrast-v2 dark:bg-container-dark border-2 border-primary rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-center cursor-pointer transition-colors min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col items-center justify-center ${dragOver ? 'bg-primary/5 dark:bg-primary/10' : ''}`,
                style: {
                    boxShadow: '0 16px 24px -8px rgba(0, 0, 0, 0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "file-input",
                        type: "file",
                        multiple: true,
                        accept: "image/*",
                        onChange: handleFileSelect,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-16 h-16 text-primary mx-auto",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl font-normal text-text dark:text-text-dark mb-2",
                        children: t('dropzone.title')
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-muted dark:text-text-muted-dark text-base mb-6",
                        children: t('dropzone.subtitle')
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm text-text-muted dark:text-text-muted-dark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-text-muted dark:text-text-muted-dark",
                                children: [
                                    "Max ",
                                    maxFiles,
                                    " files • ",
                                    (maxFileSize / (1024 * 1024)).toFixed(0),
                                    "MB per file"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t('dropzone.futureNote')
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 gap-y-4 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-primary flex-shrink-0",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium text-text-muted dark:text-text-muted-dark",
                                children: t('badges.free')
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-primary flex-shrink-0",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium text-text-muted dark:text-text-muted-dark",
                                children: t('badges.secure')
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-primary flex-shrink-0",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium text-text-muted dark:text-text-muted-dark",
                                children: t('badges.fast')
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/components/ImageUploader.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/CompressionSettings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompressionSettings",
    ()=>CompressionSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function CompressionSettings({ quality, format, resizeWidth, resizeHeight, onQualityChange, onFormatChange, onResizeChange, onCompress, isLoading }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('settings');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-2 sm:pt-3 md:pt-4 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-container-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 lg:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-text dark:text-text-dark mb-6",
                    children: t('heading')
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-base font-semibold text-text dark:text-text-dark mb-3",
                                    children: [
                                        t('format.label'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tooltip-trigger inline-flex items-center justify-center w-4 h-4 ml-1 text-sm bg-gray-200 dark:bg-gray-700 text-text-muted dark:text-text-muted-dark rounded-full cursor-help relative group",
                                            children: [
                                                "i",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tooltip-content absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-text dark:bg-text-dark text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity",
                                                    children: t('format.tooltip')
                                                }, void 0, false, {
                                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        'webp',
                                        'jpeg',
                                        'png',
                                        'avif'
                                    ].map((fmt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "format",
                                                    value: fmt,
                                                    checked: format === fmt,
                                                    onChange: (e)=>onFormatChange(e.target.value),
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-text dark:text-text-dark capitalize",
                                                    children: fmt === 'webp' ? t('format.webp') : t(`format.${fmt}`)
                                                }, void 0, false, {
                                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, fmt, true, {
                                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-base font-semibold text-text dark:text-text-dark mb-3",
                                    children: [
                                        t('quality.label', {
                                            value: quality
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tooltip-trigger inline-flex items-center justify-center w-4 h-4 ml-1 text-sm bg-gray-200 dark:bg-gray-700 text-text-muted dark:text-text-muted-dark rounded-full cursor-help relative group",
                                            children: [
                                                "i",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tooltip-content absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-text dark:bg-text-dark text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity",
                                                    children: t('quality.tooltip')
                                                }, void 0, false, {
                                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "60",
                                    max: "100",
                                    value: quality,
                                    onChange: (e)=>onQualityChange(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-base font-semibold text-text dark:text-text-dark mb-3",
                                    children: [
                                        t('resize.label'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tooltip-trigger inline-flex items-center justify-center w-4 h-4 ml-1 text-sm bg-gray-200 dark:bg-gray-700 text-text-muted dark:text-text-muted-dark rounded-full cursor-help relative group",
                                            children: [
                                                "i",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tooltip-content absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-text dark:bg-text-dark text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity",
                                                    children: t('resize.tooltip')
                                                }, void 0, false, {
                                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: t('resize.widthPlaceholder'),
                                            value: resizeWidth || '',
                                            onChange: (e)=>onResizeChange(e.target.value ? parseInt(e.target.value) : undefined, resizeHeight),
                                            className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: t('resize.heightPlaceholder'),
                                            value: resizeHeight || '',
                                            onChange: (e)=>onResizeChange(resizeWidth, e.target.value ? parseInt(e.target.value) : undefined),
                                            className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCompress,
                    disabled: isLoading,
                    className: "w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]",
                    children: isLoading ? t('compressingButton') : t('compressButton')
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/CompressionSettings.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/ProcessingView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessingView",
    ()=>ProcessingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ProcessingView({ progress, processedCount = 0, totalFiles = 0 }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('processing');
    const tHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('hero');
    const tips = t.raw('tips');
    const [currentTip, setCurrentTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentTip((prev)=>(prev + 1) % tips.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        tips
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-6 sm:mb-8 md:mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary",
                        style: {
                            lineHeight: '120%'
                        },
                        children: [
                            tHero('title'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                lineNumber: 30,
                                columnNumber: 29
                            }, this),
                            tHero('subtitle')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-container-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 lg:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "animate-spin h-16 w-16 text-primary mx-auto",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                            lineNumber: 38,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-text dark:text-text-dark mb-2",
                            children: t('title')
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-text-muted dark:text-text-muted-dark mb-6",
                            children: [
                                progress === 0 && t('status.starting'),
                                progress > 0 && progress < 100 && totalFiles > 0 && t('status.processing', {
                                    count: processedCount,
                                    total: totalFiles
                                }),
                                progress === 100 && t('status.finalizing')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-text-muted dark:text-text-muted-dark mb-8",
                            children: t('progress', {
                                progress
                            })
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                            lineNumber: 59,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary/5 dark:bg-primary/10 border-l-4 border-primary rounded-lg p-6 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-primary mb-2",
                                    children: t('tipsIntro')
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                    lineNumber: 63,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted dark:text-text-muted-dark text-base leading-relaxed",
                                    children: tips[currentTip]
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                                    lineNumber: 64,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/ProcessingView.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/.worktrees/pro-version/components/DownloadView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadView",
    ()=>DownloadView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function formatFileSize(bytes, locale) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = [
        'Bytes',
        'KB',
        'MB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const value = Math.round(bytes / Math.pow(k, i) * 100) / 100;
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(value) + ' ' + sizes[i];
}
function DownloadView({ stats, onDownload, onReset, onSubscribe }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('download');
    const tHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('hero');
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const originalSize = stats?.originalSize || 0;
    const compressedSize = stats?.compressedSize || 0;
    const savedSize = originalSize - compressedSize;
    const savingsPercent = stats?.reduction || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-6 sm:mb-8 md:mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary",
                        style: {
                            lineHeight: '120%'
                        },
                        children: [
                            tHero('title'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                lineNumber: 44,
                                columnNumber: 29
                            }, this),
                            tHero('subtitle')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-container-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 lg:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-green-600 dark:text-green-400",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 52,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-text dark:text-text-dark mb-2",
                                    children: t('success.heading')
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 57,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted dark:text-text-muted-dark",
                                    children: t('success.message')
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 58,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-text-muted dark:text-text-muted-dark uppercase mb-1",
                                            children: t('stats.original')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 64,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-text dark:text-text-dark",
                                            children: formatFileSize(originalSize, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 65,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 63,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-text-muted dark:text-text-muted-dark uppercase mb-1",
                                            children: t('stats.compressed')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 68,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-text dark:text-text-dark",
                                            children: formatFileSize(compressedSize, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 69,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 67,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-text-muted dark:text-text-muted-dark uppercase mb-1",
                                            children: t('stats.saved')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 72,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-primary",
                                            children: formatFileSize(savedSize, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 73,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 71,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-text-muted dark:text-text-muted-dark uppercase mb-1",
                                            children: t('stats.reduction')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 76,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-primary",
                                            children: [
                                                savingsPercent,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 77,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-end pr-4 text-white font-semibold text-base transition-all duration-1000",
                                        style: {
                                            width: `${savingsPercent}%`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "-",
                                                formatFileSize(savedSize, locale)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 83,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-text-muted dark:text-text-muted-dark mt-3 text-base",
                                    children: t('savingsMessage')
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 91,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                            lineNumber: 82,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onDownload,
                            className: "w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] mb-6",
                            children: t('downloadButton')
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-primary/5 dark:from-primary/10 to-primary/10 dark:to-primary/20 border border-primary/20 dark:border-primary/30 rounded-xl p-4 sm:p-6 md:p-8 text-center mb-4 sm:mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xl font-normal text-text dark:text-text-dark mb-2",
                                    children: t('leadCapture.heading')
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted dark:text-text-muted-dark mb-4",
                                    children: t('leadCapture.description')
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: t('leadCapture.emailPlaceholder'),
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 110,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSubscribe?.(email),
                                            className: "bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all whitespace-nowrap",
                                            children: t('leadCapture.subscribeButton')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 117,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 109,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-text-muted dark:text-text-muted-dark",
                                    children: [
                                        t('leadCapture.linkText'),
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://aurora33.dev",
                                            className: "text-primary hover:underline font-medium",
                                            children: t('leadCapture.linkLabel')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                            lineNumber: 127,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                            lineNumber: 105,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onReset,
                            className: "w-full border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-text dark:text-text-dark font-semibold py-3 px-8 rounded-xl transition-colors",
                            children: t('resetButton')
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/DownloadView.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/.worktrees/pro-version/components/ErrorView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorView",
    ()=>ErrorView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function ErrorView({ message, onRetry }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('errors');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-container-dark rounded-2xl shadow-sm border border-red-200 dark:border-red-900 p-4 sm:p-6 md:p-8 lg:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-8 h-8 text-red-600 dark:text-red-400",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-text dark:text-text-dark mb-2",
                    children: t('title')
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 dark:text-red-400 mb-8",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onRetry,
                    className: "bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all",
                    children: t('retryButton')
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/ErrorView.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/FormatGuide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormatGuide",
    ()=>FormatGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
;
;
function FormatGuide() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('formats');
    const formats = t.raw('formats');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-8 sm:mb-12 md:mb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-normal text-text dark:text-text-dark mb-6",
                children: t('heading')
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/FormatGuide.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6",
                children: formats.map((format, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl font-normal text-text dark:text-text-dark mb-2",
                                children: format.title
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/FormatGuide.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-text-muted dark:text-text-muted-dark leading-relaxed",
                                children: format.description
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/FormatGuide.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/.worktrees/pro-version/components/FormatGuide.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/FormatGuide.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/components/FormatGuide.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/FAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQ",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
;
;
function FAQ() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('faq');
    const questions = t.raw('questions');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-8 sm:mb-12 md:mb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-normal text-text dark:text-text-dark mb-6",
                children: t('heading')
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/FAQ.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: questions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 rounded-xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-normal text-text dark:text-text-dark mb-2",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/FAQ.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-text-muted dark:text-text-muted-dark pl-4",
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/FAQ.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/.worktrees/pro-version/components/FAQ.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/FAQ.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/components/FAQ.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
;
;
function Footer() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('common');
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto border-t border-gray-200 dark:border-gray-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-text dark:text-text-dark mb-2",
                    children: [
                        t('footer.madeWith'),
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://aurora33.dev",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-primary hover:underline font-semibold",
                            children: "aurora33"
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-text-muted dark:text-text-muted-dark",
                    children: [
                        "© ",
                        currentYear,
                        " Aurora33 · ",
                        t('footer.copyrightText')
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.worktrees/pro-version/components/Footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/LoginPrompt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPrompt",
    ()=>LoginPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function LoginPrompt() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-12 sm:mb-16 md:mb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 sm:p-8 md:p-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl font-bold text-text dark:text-text-dark mb-2",
                                children: "Unlock More Features"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-muted dark:text-text-muted-dark max-w-md",
                                children: "Create a free account to track your compression history, get higher limits, and enjoy priority support."
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth/login",
                                className: "px-6 py-3 bg-white dark:bg-gray-800 text-text dark:text-text-dark border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth/register",
                                className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium",
                                children: "Sign Up Free"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/LoginPrompt.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/UsageIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsageIndicator",
    ()=>UsageIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function UsageIndicator({ userId }) {
    const [usage, setUsage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUsage = async ()=>{
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`/api/user/usage?userId=${userId}`);
                const data = await response.json();
                if (data.success) {
                    setUsage(data.data);
                } else {
                    setError(data.error || "Failed to fetch usage data");
                }
            } catch (err) {
                setError("Failed to fetch usage data");
                console.error("Error fetching usage:", err);
            } finally{
                setLoading(false);
            }
        };
        fetchUsage();
        // Refresh every 30 seconds
        const interval = setInterval(fetchUsage, 30000);
        return ()=>clearInterval(interval);
    }, [
        userId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-6 animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg p-4 h-24"
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    if (error || !usage) {
        return null;
    }
    const percentage = usage.usageCount / usage.limit * 100;
    let barColor = "bg-green-500";
    let textColor = "text-green-600 dark:text-green-400";
    if (percentage >= 100) {
        barColor = "bg-red-500";
        textColor = "text-red-600 dark:text-red-400";
    } else if (percentage >= 75) {
        barColor = "bg-orange-500";
        textColor = "text-orange-600 dark:text-orange-400";
    }
    // Note: resetTime is used for display purposes in the future
    // const resetDate = new Date(usage.resetTime);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-text dark:text-text-dark",
                            children: "Daily Compression Limit"
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-sm font-medium ${textColor}`,
                            children: [
                                usage.usageCount,
                                " of ",
                                usage.limit,
                                " used"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${barColor} h-2 rounded-full transition-all duration-300`,
                        style: {
                            width: `${Math.min(percentage, 100)}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-text-muted dark:text-text-muted-dark",
                    children: "Resets tomorrow at 12:00 AM"
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/UsageIndicator.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/LimitExceededView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LimitExceededView",
    ()=>LimitExceededView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function LimitExceededView({ tier, limit, onClose }) {
    const isPro = tier === "PRO";
    const upgradePath = isPro ? "/dashboard/settings" : "/pricing";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[500px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-red-600 dark:text-red-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl font-bold text-text dark:text-text-dark mb-2",
                                children: "Daily Limit Reached"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-muted dark:text-text-muted-dark mb-6",
                                children: [
                                    "You've used all ",
                                    limit,
                                    " compressions for today. Come back tomorrow or upgrade your plan for higher limits."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-text dark:text-text-dark mb-2",
                                children: isPro ? "Pro Plan Info" : "Upgrade to Pro"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-text-muted dark:text-text-muted-dark",
                                children: isPro ? "You currently have the highest tier. Try again tomorrow or contact support for higher limits." : "Upgrade to Pro for up to 20 daily compressions, higher file limits, and priority support."
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            !isPro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: upgradePath,
                                className: "w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-center",
                                children: "Upgrade to Pro"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full px-6 py-3 bg-white dark:bg-gray-800 text-text dark:text-text-dark border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium",
                                children: isPro ? "Contact Support" : "Go Back"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs text-text-muted dark:text-text-muted-dark mt-6",
                        children: "Daily limit resets at 12:00 AM UTC"
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/LimitExceededView.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/TierBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TierBadge",
    ()=>TierBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function TierBadge({ tier, size = "md" }) {
    const isPro = tier === "PRO";
    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base"
    };
    const bgColor = isPro ? "bg-purple-100 dark:bg-purple-900/30" : "bg-gray-100 dark:bg-gray-800";
    const textColor = isPro ? "text-purple-700 dark:text-purple-300" : "text-gray-700 dark:text-gray-300";
    const borderColor = isPro ? "border-purple-200 dark:border-purple-800" : "border-gray-200 dark:border-gray-700";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-2 ${sizeClasses[size]} rounded-full border ${bgColor} ${textColor} ${borderColor} font-medium`,
        children: [
            isPro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/components/TierBadge.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/TierBadge.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: isPro ? "Pro" : "Free"
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/TierBadge.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/components/TierBadge.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/lib/utils/session-tracker.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSessionData",
    ()=>clearSessionData,
    "getSessionLimits",
    ()=>getSessionLimits,
    "incrementImageCount",
    ()=>incrementImageCount,
    "incrementSessionCount",
    ()=>incrementSessionCount
]);
// Utility for tracking anonymous user sessions (batches) using cookies and localStorage
const SESSION_COUNT_COOKIE = '_aurora_session_count';
const SESSION_RESET_KEY = '_aurora_session_reset';
const IMAGE_COUNT_KEY = '_aurora_image_count';
// FREE TIER LIMITS
const FREE_BATCHES_LIMIT = 6;
const FREE_IMAGES_LIMIT = 5;
const FREE_MAX_FILE_SIZE = 7_000_000; // 7MB
const RESET_INTERVAL_HOURS = 23;
function getSessionLimits() {
    // Get reset timestamp from localStorage
    const resetTimestamp = localStorage.getItem(SESSION_RESET_KEY);
    const now = Date.now();
    let batchesUsed = 0;
    let nextResetTime = new Date(now + RESET_INTERVAL_HOURS * 60 * 60 * 1000);
    if (resetTimestamp) {
        const resetTime = parseInt(resetTimestamp, 10);
        if (now > resetTime) {
            // Reset period passed, clear counters
            localStorage.removeItem(SESSION_RESET_KEY);
            localStorage.removeItem(SESSION_COUNT_COOKIE);
        } else {
            // Still within reset period
            const batchCountStr = localStorage.getItem(SESSION_COUNT_COOKIE);
            batchesUsed = batchCountStr ? parseInt(batchCountStr, 10) : 0;
            nextResetTime = new Date(resetTime);
        }
    }
    const imagesInBatch = localStorage.getItem(IMAGE_COUNT_KEY) ? parseInt(localStorage.getItem(IMAGE_COUNT_KEY), 10) : 0;
    return {
        batchesUsed,
        batchesLimit: FREE_BATCHES_LIMIT,
        imagesInBatch,
        imagesPerBatchLimit: FREE_IMAGES_LIMIT,
        maxFileSize: FREE_MAX_FILE_SIZE,
        nextResetTime
    };
}
function incrementSessionCount() {
    const limits = getSessionLimits();
    const newCount = limits.batchesUsed + 1;
    localStorage.setItem(SESSION_COUNT_COOKIE, newCount.toString());
    // Set reset time if not set
    if (!localStorage.getItem(SESSION_RESET_KEY)) {
        const resetTime = Date.now() + RESET_INTERVAL_HOURS * 60 * 60 * 1000;
        localStorage.setItem(SESSION_RESET_KEY, resetTime.toString());
    }
    // Clear image count for new batch
    localStorage.removeItem(IMAGE_COUNT_KEY);
}
function incrementImageCount() {
    const current = localStorage.getItem(IMAGE_COUNT_KEY) || '0';
    const newCount = parseInt(current, 10) + 1;
    localStorage.setItem(IMAGE_COUNT_KEY, newCount.toString());
}
function clearSessionData() {
    localStorage.removeItem(SESSION_COUNT_COOKIE);
    localStorage.removeItem(SESSION_RESET_KEY);
    localStorage.removeItem(IMAGE_COUNT_KEY);
}
}),
"[project]/.worktrees/pro-version/components/RegisterModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$session$2d$tracker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/utils/session-tracker.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RegisterModal({ isOpen, onClose, context }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [marketingConsent, setMarketingConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordError, setPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!isOpen) {
        return null;
    }
    // Validate password in real-time
    const handlePasswordChange = (value)=>{
        setPassword(value);
        if (value.length > 0 && value.length < 8) {
            setPasswordError(t('common.password_min_length'));
        } else {
            setPasswordError(null);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        // Validate email
        if (!email || !email.includes('@')) {
            setError(t('common.invalid_email'));
            return;
        }
        // Validate password match
        if (password !== confirmPassword) {
            setError(t('common.passwords_dont_match'));
            return;
        }
        // Validate password length
        if (password.length < 8) {
            setError(t('common.password_min_length'));
            return;
        }
        // Validate checkbox
        if (!marketingConsent) {
            setError(t('common.must_accept_terms'));
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    marketingConsent: true
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.error || t('common.registration_failed'));
                return;
            }
            // Clear anonymous session before signing in
            (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$session$2d$tracker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSessionData"])();
            // Sign in with credentials
            const signInResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])('credentials', {
                email,
                password,
                redirect: false
            });
            if (!signInResult?.ok) {
                setError(signInResult?.error || t('common.signin_failed'));
                return;
            }
            // Redirect to tool page on success
            router.push('/tool');
        } catch  {
            setError(t('common.error_occurred'));
        } finally{
            setIsLoading(false);
        }
    };
    // Get context message based on context prop
    const getContextMessage = ()=>{
        switch(context){
            case 'image_limit':
                return t('pricing.limit_reached.images_message');
            case 'session_limit':
                return t('pricing.limit_reached.sessions_message');
            default:
                return null;
        }
    };
    const contextMessage = getContextMessage();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-black bg-opacity-50 cursor-pointer",
                onClick: onClose,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-lg shadow-xl bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors",
                            "aria-label": "Close modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-text dark:text-text-dark mb-2",
                            children: t('common.create_account')
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        contextMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-text-muted dark:text-text-muted-dark mb-6",
                            children: contextMessage
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded text-red-700 dark:text-red-400 text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "register-email",
                                            className: "block text-sm font-medium text-text dark:text-text-dark mb-2",
                                            children: t('common.email')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "register-email",
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true,
                                            disabled: isLoading,
                                            className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bg-dark text-text dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",
                                            placeholder: "you@example.com"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "register-password",
                                            className: "block text-sm font-medium text-text dark:text-text-dark mb-2",
                                            children: t('common.password')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "register-password",
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>handlePasswordChange(e.target.value),
                                            required: true,
                                            disabled: isLoading,
                                            className: `w-full px-4 py-2 border rounded-lg bg-white dark:bg-bg-dark text-text dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${passwordError ? 'border-red-400 dark:border-red-600 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-primary dark:focus:ring-primary'}`,
                                            placeholder: "••••••••"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        passwordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-600 dark:text-red-400",
                                            children: passwordError
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-text-muted dark:text-text-muted-dark",
                                            children: t('common.password_requirements')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "register-confirm-password",
                                            className: "block text-sm font-medium text-text dark:text-text-dark mb-2",
                                            children: t('common.confirm_password')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "register-confirm-password",
                                            type: "password",
                                            value: confirmPassword,
                                            onChange: (e)=>setConfirmPassword(e.target.value),
                                            required: true,
                                            disabled: isLoading,
                                            className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-bg-dark text-text dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",
                                            placeholder: "••••••••"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "register-marketing-consent",
                                            type: "checkbox",
                                            checked: marketingConsent,
                                            onChange: (e)=>setMarketingConsent(e.target.checked),
                                            disabled: isLoading,
                                            className: "mt-1 h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary dark:focus:ring-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "register-marketing-consent",
                                            className: "ml-3 text-sm text-text dark:text-text-dark cursor-pointer",
                                            children: t('common.accept_terms_and_marketing')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading || !marketingConsent,
                                            className: "flex-1 py-2 px-4 bg-primary hover:bg-orange-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 disabled:cursor-not-allowed",
                                            children: isLoading ? t('common.registering') : t('common.register')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClose,
                                            disabled: isLoading,
                                            className: "flex-1 py-2 px-4 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: t('common.cancel')
                                        }, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/RegisterModal.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/.worktrees/pro-version/lib/utils/logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logger",
    ()=>logger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/config.ts [app-ssr] (ecmascript)");
;
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};
const getTimestamp = ()=>{
    return new Date().toISOString();
};
const logger = {
    info: (message, ...args)=>{
        console.log(`${colors.cyan}[INFO]${colors.reset} ${colors.bright}${getTimestamp()}${colors.reset} - ${message}`, ...args);
    },
    success: (message, ...args)=>{
        console.log(`${colors.green}[SUCCESS]${colors.reset} ${colors.bright}${getTimestamp()}${colors.reset} - ${message}`, ...args);
    },
    warn: (message, ...args)=>{
        console.warn(`${colors.yellow}[WARN]${colors.reset} ${colors.bright}${getTimestamp()}${colors.reset} - ${message}`, ...args);
    },
    error: (message, ...args)=>{
        console.error(`${colors.red}[ERROR]${colors.reset} ${colors.bright}${getTimestamp()}${colors.reset} - ${message}`, ...args);
    },
    debug: (message, ...args)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].server.nodeEnv === 'development') {
            console.log(`${colors.magenta}[DEBUG]${colors.reset} ${colors.bright}${getTimestamp()}${colors.reset} - ${message}`, ...args);
        }
    }
};
}),
"[project]/.worktrees/pro-version/app/tool/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ImageUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/ImageUploader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$CompressionSettings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/CompressionSettings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ProcessingView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/ProcessingView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$DownloadView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/DownloadView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ErrorView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/ErrorView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$FormatGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/FormatGuide.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/FAQ.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LoginPrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/LoginPrompt.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$UsageIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/UsageIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LimitExceededView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/LimitExceededView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$TierBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/TierBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$RegisterModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/RegisterModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/utils/logger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$session$2d$tracker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/utils/session-tracker.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('upload');
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jobId, setJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [processedCount, setProcessedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalFiles, setTotalFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [dailyLimitExceeded, setDailyLimitExceeded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        format: 'webp',
        quality: 80,
        resizeWidth: undefined,
        resizeHeight: undefined
    });
    const [isCompressing, setIsCompressing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRegisterModal, setShowRegisterModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerModalContext, setRegisterModalContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [sessionLimits, setSessionLimits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check daily usage before rendering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDailyLimit = async ()=>{
            if (session?.user?.id) {
                try {
                    const response = await fetch(`/api/user/usage?userId=${session.user.id}`);
                    const data = await response.json();
                    if (data.success && data.data && data.data.remaining === 0) {
                        setDailyLimitExceeded(true);
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Error checking daily limit', {
                        error: errorMessage
                    });
                }
            }
        };
        if (currentView === 'upload' && session?.user?.id) {
            checkDailyLimit();
        }
    }, [
        currentView,
        session?.user?.id
    ]);
    // Load session limits for anonymous users on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!session?.user?.id) {
            // Anonymous user - check localStorage limits
            const limits = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$session$2d$tracker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionLimits"])();
            setSessionLimits(limits);
        }
    }, [
        session?.user?.id
    ]);
    const handleFilesSelected = (newFiles)=>{
        // Check if user is authenticated
        if (!session?.user?.id) {
            // Anonymous user - check limits
            const limits = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$session$2d$tracker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSessionLimits"])();
            const totalImages = (files.length || 0) + newFiles.length;
            if (totalImages > limits.imagesPerBatchLimit) {
                setRegisterModalContext('image_limit');
                setShowRegisterModal(true);
                return;
            }
            if (limits.batchesUsed >= limits.batchesLimit) {
                setRegisterModalContext('session_limit');
                setShowRegisterModal(true);
                return;
            }
        }
        // Original logic - Si ya hay archivos, agregar los nuevos; si no, reemplazar
        if (files.length > 0) {
            setFiles([
                ...files,
                ...newFiles
            ]);
        } else {
            setFiles(newFiles);
            setCurrentView('settings');
        }
    };
    const handleShowSettings = ()=>{
        setCurrentView('settings');
    };
    const handleQualityChange = (quality)=>{
        setSettings({
            ...settings,
            quality
        });
    };
    const handleFormatChange = (format)=>{
        setSettings({
            ...settings,
            format
        });
    };
    const handleResizeChange = (width, height)=>{
        setSettings({
            ...settings,
            resizeWidth: width,
            resizeHeight: height
        });
    };
    const handleCompress = async ()=>{
        try {
            setIsCompressing(true);
            setCurrentView('processing');
            setProgress(0);
            // Step 1: Create job
            const jobResponse = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jobData = await jobResponse.json();
            if (!jobData.success) throw new Error(jobData.error);
            const newJobId = jobData.jobId;
            setJobId(newJobId);
            // Step 2: Upload files
            const formData = new FormData();
            files.forEach((file)=>formData.append('images', file));
            const uploadResponse = await fetch(`/api/jobs/${newJobId}/upload`, {
                method: 'POST',
                body: formData
            });
            const uploadData = await uploadResponse.json();
            if (!uploadData.success) throw new Error(uploadData.error);
            setTotalFiles(uploadData.filesUploaded);
            setProgress(30);
            // Step 3: Process images
            const processResponse = await fetch(`/api/jobs/${newJobId}/process`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    format: settings.format,
                    quality: settings.quality,
                    resize: settings.resizeWidth || settings.resizeHeight ? {
                        width: settings.resizeWidth,
                        height: settings.resizeHeight
                    } : undefined
                })
            });
            const processData = await processResponse.json();
            if (!processData.success) throw new Error(processData.error);
            // Step 4: Poll for completion
            let isComplete = false;
            let pollCount = 0;
            const maxPolls = 120;
            while(!isComplete && pollCount < maxPolls){
                await new Promise((resolve)=>setTimeout(resolve, 1000));
                const statusResponse = await fetch(`/api/jobs/${newJobId}/status`);
                const statusData = await statusResponse.json();
                if (statusData.status === 'completed') {
                    isComplete = true;
                    setProgress(100);
                    setStats({
                        originalSize: statusData.originalSize,
                        compressedSize: statusData.compressedSize,
                        reduction: statusData.reduction
                    });
                    setCurrentView('download');
                } else if (statusData.status === 'failed') {
                    throw new Error(statusData.error || 'Processing failed');
                } else {
                    setProcessedCount(statusData.processedCount);
                    const estimatedProgress = 30 + statusData.progress * 0.7;
                    setProgress(Math.min(estimatedProgress, 99));
                }
                pollCount++;
            }
            if (!isComplete) {
                throw new Error('Processing timeout');
            }
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            const errorMessage = err instanceof Error ? err.message : String(err);
            __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Compression error', {
                error: errorMessage
            });
            setErrorMessage(errorMessage || t('errors.defaultMessage', {
                defaultValue: 'An error occurred during compression'
            }));
            setCurrentView('error');
        } finally{
            setIsCompressing(false);
        }
    };
    const handleDownload = async ()=>{
        if (!jobId) return;
        try {
            const response = await fetch(`/api/jobs/${jobId}/download`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `compressed-images-${jobId}.zip`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error('Download error', {
                error: errorMessage
            });
            setErrorMessage(t('errors.downloadFailed', {
                defaultValue: 'Failed to download files'
            }));
            setCurrentView('error');
        }
    };
    const handleReset = ()=>{
        setFiles([]);
        setJobId(null);
        setProgress(0);
        setProcessedCount(0);
        setTotalFiles(0);
        setSettings({
            format: 'webp',
            quality: 80,
            resizeWidth: undefined,
            resizeHeight: undefined
        });
        setCurrentView('upload');
    };
    const handleRetry = ()=>{
        setErrorMessage('');
        setCurrentView('settings');
    };
    const handleSubscribe = async (email)=>{
        if (!email) return;
        __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$utils$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].debug('Subscribe', {
            email
        });
    };
    // Show loading state while checking auth
    if (status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-background dark:bg-bg-dark text-text dark:text-text-dark",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto flex items-center justify-center min-h-[400px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-muted dark:text-text-muted-dark",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background dark:bg-bg-dark text-text dark:text-text-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            session?.user && dailyLimitExceeded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LimitExceededView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitExceededView"], {
                tier: session.user.tier || 'FREE',
                limit: __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LIMITS"][session.user.tier || 'FREE'].MAX_DAILY_USAGE,
                onClose: ()=>setDailyLimitExceeded(false)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            !session?.user && currentView === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LoginPrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginPrompt"], {}, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 305,
                columnNumber: 54
            }, this),
            session?.user && !dailyLimitExceeded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$TierBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TierBadge"], {
                    tier: session.user.tier || 'FREE',
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                    lineNumber: 310,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, this),
            session?.user && !dailyLimitExceeded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$UsageIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsageIndicator"], {
                userId: session.user.id
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            currentView === 'upload' && !dailyLimitExceeded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col mb-8 sm:mb-12 md:mb-16 mt-8 sm:mt-12 md:mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mb-6 sm:mb-8 md:mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary",
                                    style: {
                                        lineHeight: '120%'
                                    },
                                    children: [
                                        t('hero.title'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 36
                                        }, this),
                                        t('hero.subtitle')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-text-muted dark:text-text-muted-dark mb-8 leading-relaxed",
                                                    children: t('hero.description')
                                                }, void 0, false, {
                                                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: t.raw('hero.features').map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-5 h-5 text-primary flex-shrink-0 mt-0.5",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-text dark:text-text-dark font-medium",
                                                                children: feature
                                                            }, void 0, false, {
                                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ImageUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageUploader"], {
                                        onFilesSelected: handleFilesSelected,
                                        onShowSettings: handleShowSettings
                                    }, void 0, false, {
                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 322,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            currentView === 'settings' && files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary",
                                    style: {
                                        lineHeight: '120%'
                                    },
                                    children: [
                                        t('hero.title'),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 36
                                        }, this),
                                        t('hero.subtitle')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                            lineNumber: 366,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$CompressionSettings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompressionSettings"], {
                        quality: settings.quality,
                        format: settings.format,
                        resizeWidth: settings.resizeWidth,
                        resizeHeight: settings.resizeHeight,
                        onQualityChange: handleQualityChange,
                        onFormatChange: handleFormatChange,
                        onResizeChange: handleResizeChange,
                        onCompress: handleCompress,
                        isLoading: isCompressing
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col mb-8 sm:mb-12 md:mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-text dark:text-text-dark mb-6",
                                                children: t('uploader.selectedImages')
                                            }, void 0, false, {
                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: URL.createObjectURL(file),
                                                                        alt: file.name,
                                                                        className: "w-12 h-12 object-cover rounded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-text dark:text-text-dark truncate",
                                                                                children: file.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                                lineNumber: 405,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-text-muted dark:text-text-muted-dark",
                                                                                children: [
                                                                                    (file.size / 1024 / 1024).toFixed(2),
                                                                                    " MB"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                                lineNumber: 406,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newFiles = files.filter((_, i)=>i !== index);
                                                                    if (newFiles.length === 0) {
                                                                        handleReset();
                                                                    } else {
                                                                        setFiles(newFiles);
                                                                    }
                                                                },
                                                                className: "px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-text dark:text-text-dark transition-colors whitespace-nowrap",
                                                                children: t('uploader.removeButton')
                                                            }, void 0, false, {
                                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-text dark:text-text-dark mb-6",
                                                children: t('uploader.addMoreImages')
                                            }, void 0, false, {
                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ImageUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageUploader"], {
                                                onFilesSelected: handleFilesSelected,
                                                onShowSettings: handleShowSettings
                                            }, void 0, false, {
                                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                                lineNumber: 430,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                                lineNumber: 391,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            currentView === 'processing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ProcessingView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessingView"], {
                progress: progress,
                processedCount: processedCount,
                totalFiles: totalFiles
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, this),
            currentView === 'download' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$DownloadView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DownloadView"], {
                stats: stats,
                onDownload: handleDownload,
                onReset: handleReset,
                onSubscribe: handleSubscribe
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 446,
                columnNumber: 9
            }, this),
            currentView === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$ErrorView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorView"], {
                message: errorMessage,
                onRetry: handleRetry
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 455,
                columnNumber: 9
            }, this),
            currentView === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$FormatGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatGuide"], {}, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQ"], {}, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$RegisterModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showRegisterModal,
                onClose: ()=>{
                    setShowRegisterModal(false);
                    setRegisterModalContext(undefined);
                },
                context: registerModalContext
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/app/tool/page.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_worktrees_pro-version_36366ffc._.js.map