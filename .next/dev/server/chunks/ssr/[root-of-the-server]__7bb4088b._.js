module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useLocale",
    ()=>useLocale,
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LocaleProvider({ locale, messages, children }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            messages,
            t: (key, defaultValue = '')=>{
                const keys = key.split('.');
                let current = messages;
                for (const k of keys){
                    current = current?.[k];
                }
                return typeof current === 'string' ? current : defaultValue || key;
            },
            tRaw: (key)=>{
                const keys = key.split('.');
                let current = messages;
                for (const k of keys){
                    current = current?.[k];
                }
                return current;
            },
            tParams: (key, params, defaultValue = '')=>{
                const keys = key.split('.');
                let current = messages;
                for (const k of keys){
                    current = current?.[k];
                }
                if (typeof current !== 'string') return defaultValue || key;
                // Replace {key} with values from params
                return current.replace(/\{(\w+)\}/g, (_, paramKey)=>{
                    return String(params[paramKey] ?? `{${paramKey}}`);
                });
            }
        }), [
        locale,
        messages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/lib/i18n-context.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
function useLocale() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within LocaleProvider');
    }
    return context.locale;
}
function useTranslations(namespace = '') {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    if (!context) {
        throw new Error('useTranslations must be used within LocaleProvider');
    }
    const namespacedMessages = namespace ? context.messages[namespace] : context.messages;
    return Object.assign((key, params)=>{
        const keys = key.split('.');
        let current = namespacedMessages;
        for (const k of keys){
            current = current?.[k];
        }
        if (typeof current !== 'string') {
            return key;
        }
        if (!params) return current;
        // Replace {key} with values from params
        return current.replace(/\{(\w+)\}/g, (_, paramKey)=>{
            return String(params[paramKey] ?? `{${paramKey}}`);
        });
    }, {
        raw: (key)=>{
            const keys = key.split('.');
            let current = namespacedMessages;
            for (const k of keys){
                current = current?.[k];
            }
            return current;
        }
    });
}
}),
"[project]/.worktrees/pro-version/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Providers({ children, session, locale, messages }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocaleProvider"], {
            locale: locale,
            messages: messages,
            children: children
        }, void 0, false, {
            fileName: "[project]/.worktrees/pro-version/app/providers.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/app/providers.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/.worktrees/pro-version/components/LanguageToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function LanguageToggle() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('es');
    const langRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('es');
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only initialize once on client mount
        if (initialized.current) return;
        initialized.current = true;
        // Check localStorage and default to Spanish
        const savedLanguage = localStorage.getItem('preferred-language');
        const cookieLanguage = document.cookie.split('; ').find((row)=>row.startsWith('NEXT_LOCALE='))?.split('=')[1];
        const currentLanguage = savedLanguage || cookieLanguage || 'es';
        langRef.current = currentLanguage;
        setLanguage(currentLanguage);
    }, []);
    const toggleLanguage = ()=>{
        const newLanguage = language === 'es' ? 'en' : 'es';
        langRef.current = newLanguage;
        // Update localStorage
        localStorage.setItem('preferred-language', newLanguage);
        // Update cookie for server-side (expires in 1 year)
        const expiresAt = new Date();
        expiresAt.setFullYear(expiresAt.getFullYear() + 1);
        document.cookie = `NEXT_LOCALE=${newLanguage}; path=/; expires=${expiresAt.toUTCString()}`;
        // Update state
        setLanguage(newLanguage);
        // Refresh the page to apply new language (using router.refresh instead of reload)
        router.refresh();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleLanguage,
        className: "relative inline-flex items-center justify-between h-8 w-14 px-1 rounded-full transition-all duration-500 bg-gray-300 dark:bg-gray-700",
        "aria-label": "Toggle language",
        title: language === 'es' ? 'Switch to English' : 'Cambiar a Español',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center justify-center flex-1 text-xs font-bold text-gray-800 dark:text-gray-100 z-10 transition-opacity duration-500",
                children: "ES"
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/LanguageToggle.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-0.3 inline-flex items-center justify-center h-6 w-6 transform rounded-full transition-all duration-500 bg-white dark:bg-gray-900 ${language === 'en' ? 'translate-x-6' : 'translate-x-0'}`
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/LanguageToggle.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center justify-center flex-1 text-xs font-bold text-gray-800 dark:text-gray-100 z-10 transition-opacity duration-500",
                children: "EN"
            }, void 0, false, {
                fileName: "[project]/.worktrees/pro-version/components/LanguageToggle.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.worktrees/pro-version/components/LanguageToggle.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/.worktrees/pro-version/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/lib/i18n-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/components/LanguageToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.worktrees/pro-version/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('common');
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // Check if current route matches a nav item
    const isActive = (path)=>{
        return pathname === path || pathname.startsWith(path + '/');
    };
    const navLinkClass = (isActivePath)=>`text-sm font-medium transition-colors ${isActivePath ? 'text-primary dark:text-primary' : 'text-text-muted dark:text-text-muted-dark hover:text-text dark:hover:text-text-dark'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-contrast bg-background dark:border-contrast-v2 dark:bg-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/tool",
                            className: "text-lg font-bold text-primary dark:text-primary hover:opacity-80 transition-opacity",
                            "aria-label": "Croma - Go to tool",
                            children: "Croma"
                        }, void 0, false, {
                            fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tool",
                                className: navLinkClass(isActive('/tool')),
                                "aria-current": isActive('/tool') ? 'page' : undefined,
                                children: t('navigation.tool')
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: navLinkClass(isActive('/pricing')),
                                "aria-current": isActive('/pricing') ? 'page' : undefined,
                                children: t('navigation.pricing') || 'Pricing'
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            session?.user?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block text-sm text-text-muted dark:text-text-muted-dark",
                                children: session.user.email
                            }, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$worktrees$2f$pro$2d$version$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                                fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.worktrees/pro-version/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7bb4088b._.js.map