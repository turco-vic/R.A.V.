<template>
    <section class="page-hero">
        <div class="cross">✝</div>
        <div class="content">
            <p class="section-label">Retiro de Aventura e Vida</p>
            <h1 class="section-title">RAV <span>{{ edition?.num }}</span></h1>
            <p class="sub" v-if="edition?.name">{{ edition.name }} · {{ edition?.date }}</p>
            <p class="sub" v-else>{{ edition?.date }}</p>
        </div>
    </section>

    <div class="divider"></div>

    <section class="coming-section">
        <div class="container">
            <div class="coming-card">
                <div class="coming-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                    </svg>
                </div>
                <div class="coming-title">Fotos em breve</div>
                <div class="coming-text">As memórias do RAV {{ edition?.num }} serão publicadas aqui em breve.</div>
                <RouterLink to="/"><button class="btn-outline" style="margin-top: 1.5rem;">Voltar para o início</button>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { editions } from '../data/editions.js'

const route = useRoute()
const edition = computed(() => editions.find(e => e.num === Number(route.params.id)))
</script>

<style scoped>
.page-hero {
    background: var(--bg);
    padding: 6rem 2rem 5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.cross {
    position: absolute;
    opacity: 0.04;
    font-size: 280px;
    color: #fff;
    pointer-events: none;
    user-select: none;
    font-weight: 700;
    line-height: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.content {
    position: relative;
    z-index: 1;
}

.sub {
    font-size: 16px;
    color: var(--muted);
    margin-top: 1rem;
}

.coming-section {
    background: var(--bg-2);
    padding: 5rem 2.5rem;
    min-height: 40vh;
    display: flex;
    align-items: center;
}

.container {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
}

.coming-card {
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 3rem 2rem;
    text-align: center;
}

.coming-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: rgba(220, 38, 38, 0.1);
    border: 0.5px solid rgba(220, 38, 38, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--red);
}

.coming-icon svg {
    width: 22px;
    height: 22px;
}

.coming-title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.5rem;
}

.coming-text {
    font-size: 14px;
    color: #666;
    line-height: 1.7;
}
</style>
