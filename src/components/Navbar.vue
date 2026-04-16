<template>
    <nav class="nav">
        <RouterLink to="/" class="logo">R.A.V.</RouterLink>
        <div class="links">
            <RouterLink to="/" :class="{ active: route.path === '/' }">Início</RouterLink>
            <RouterLink to="/sobre" :class="{ active: route.path === '/sobre' }">Sobre</RouterLink>
            <RouterLink to="/contato" :class="{ active: route.path === '/contato' }">Contato</RouterLink>
        </div>
    </nav>

    <nav class="bottom-tab">
        <RouterLink to="/" class="tab-item" :class="{ active: route.path === '/' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
            <span>Início</span>
        </RouterLink>
        <RouterLink to="/sobre" class="tab-item" :class="{ active: route.path === '/sobre' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4M12 16h.01" />
            </svg>
            <span>Sobre</span>
        </RouterLink>
        <RouterLink to="/contato" class="tab-item" :class="{ active: route.path === '/contato' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Contato</span>
        </RouterLink>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2.5rem;
    border-bottom: 0.5px solid rgba(220, 38, 38, 0.2);
    background: #0a0a0a;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 3px;
}

.links {
    display: flex;
    gap: 2rem;
}

.links a {
    font-size: 14px;
    color: #999;
    transition: color 0.2s;
}

.links a:hover,
.links a.active {
    color: #fff;
}

.bottom-tab {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0a0a0a;
    border-top: 0.5px solid #1f1f1f;
    z-index: 100;
    padding-bottom: env(safe-area-inset-bottom);
}

.tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 10px 0;
    color: #555;
    flex: 1;
    transition: color 0.2s;
}

.tab-item svg {
    width: 22px;
    height: 22px;
}

.tab-item span {
    font-size: 10px;
    letter-spacing: 0.5px;
}

.tab-item.active {
    color: #fff;
}

.tab-item:hover {
    color: var(--red);
}

@media (max-width: 640px) {
    .links {
        display: none;
    }

    .bottom-tab {
        display: flex;
    }
}
</style>
