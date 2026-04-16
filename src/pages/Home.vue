<template>
    <section class="hero">
        <div class="cross">✝</div>
        <div class="hero-content">
            <p class="section-label">Paróquia Sant'Ana de Sousas · Campinas</p>
            <h1 class="hero-title">Retiro de<br><span>Aventura e Vida</span></h1>
            <p class="hero-sub">Um retiro espiritual para jovens organizado pela Comunidade Luz da Essência. Uma
                experiência que transforma e fica para sempre.</p>
            <div class="hero-btns">
                <RouterLink to="/contato"><button class="btn-primary">Quero participar</button></RouterLink>
                <RouterLink to="/sobre"><button class="btn-outline">Conhecer o R.A.V.</button></RouterLink>
            </div>
        </div>
    </section>

    <div class="divider"></div>

    <section class="editions-section">
        <div class="editions-header">
            <p class="section-label">Histórico</p>
            <h2 class="section-title">25 edições de <span>história</span></h2>
        </div>
        <div class="carousel-wrap">
            <button class="arrow left" @click="scroll(-1)" :disabled="atStart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <div class="scroll-track" ref="track">
                <RouterLink v-for="ed in sortedEditions" :key="ed.num" :to="`/retiros/${ed.num}`" class="edition-card"
                    :class="{ current: ed.current }">
                    <div class="ed-num">{{ ed.num }}</div>
                    <div class="ed-name">{{ ed.name || '—' }}</div>
                    <div class="ed-date">{{ ed.date }}</div>
                    <span class="ed-tag" :class="{ past: !ed.current }">{{ ed.current ? 'Atual' : 'Ver fotos' }}</span>
                </RouterLink>
            </div>
            <button class="arrow right" @click="scroll(1)" :disabled="atEnd">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    </section>

    <div class="divider"></div>

    <section class="pillars-section">
        <div class="container">
            <p class="section-label">O que nos move</p>
            <h2 class="section-title">Três <span>pilares</span></h2>
            <div class="pillars-grid">
                <div v-for="p in pillars" :key="p.title" class="pillar-card">
                    <div class="pillar-icon" v-html="p.icon"></div>
                    <div class="pillar-title">{{ p.title }}</div>
                    <div class="pillar-text">{{ p.text }}</div>
                </div>
            </div>
        </div>
    </section>

    <section class="secret-section">
        <div
            class="container secret-card"
            @mouseenter="showSecretGlow"
            @mousemove="moveSecretGlow"
            @mouseleave="hideSecretGlow"
        >
            <div class="secret-glow" :style="secretGlowStyle"></div>
            <img src="/logorav.png" alt="Logo do R.A.V." class="secret-logo" />
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { editions } from '../data/editions.js'

const track = ref(null)
const atStart = ref(true)
const atEnd = ref(false)

const sortedEditions = computed(() => [...editions].reverse())

const CARD_WIDTH = 166

const secretGlowX = ref(50)
const secretGlowY = ref(50)
const secretGlowVisible = ref(false)

const secretGlowStyle = computed(() => ({
    left: `${secretGlowX.value}%`,
    top: `${secretGlowY.value}%`,
    opacity: secretGlowVisible.value ? 1 : 0,
}))

function scroll(dir) {
    track.value.scrollBy({ left: dir * CARD_WIDTH * 3, behavior: 'smooth' })
}

function showSecretGlow(event) {
    secretGlowVisible.value = true
    moveSecretGlow(event)
}

function moveSecretGlow(event) {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    secretGlowX.value = ((event.clientX - rect.left) / rect.width) * 100
    secretGlowY.value = ((event.clientY - rect.top) / rect.height) * 100
}

function hideSecretGlow() {
    secretGlowVisible.value = false
}

function updateArrows() {
    const el = track.value
    if (!el) return
    atStart.value = el.scrollLeft <= 0
    atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
}

onMounted(() => {
    track.value.addEventListener('scroll', updateArrows)
    updateArrows()
})

onUnmounted(() => {
    track.value?.removeEventListener('scroll', updateArrows)
})

const pillars = [
    {
        title: 'Fé',
        text: 'Encontros que aprofundam a relação com Deus e fortalecem a vida espiritual dos jovens da comunidade.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M7.5 9h9"/></svg>`
    },
    {
        title: 'Aventura',
        text: 'Experiências que desafiam, unem e marcam. O R.A.V. é para quem quer viver a fé de forma intensa.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8z"/></svg>`
    },
    {
        title: 'Vida',
        text: 'Trilhar o caminho para a liberdade — de verdade. Esse é o convite que o R.A.V. faz há mais de 20 anos.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>`
    },
]
</script>

<style scoped>
.hero {
    background: var(--bg);
    min-height: 88vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5rem 2rem 4rem;
    position: relative;
    overflow: hidden;
}

.cross {
    position: absolute;
    opacity: 0.04;
    font-size: 580px;
    color: #fff;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    font-weight: 700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: clamp(3rem, 9vw, 6.5rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
}

.hero-title span {
    color: var(--red);
}

.hero-sub {
    font-size: 16px;
    color: var(--muted);
    margin: 1.5rem auto 2.5rem;
    max-width: 420px;
    line-height: 1.7;
}

.hero-btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.editions-section {
    background: var(--bg-2);
    padding: 5rem 0 5rem;
}

.editions-header {
    padding: 0 2.5rem;
    margin-bottom: 2.5rem;
}

.carousel-wrap {
    display: flex;
    align-items: center;
    gap: 0;
    position: relative;
}

.arrow {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.2s;
    z-index: 1;
}

.arrow:hover:not(:disabled) {
    transform: scale(1.06);
}

.arrow:disabled {
    opacity: 0.2;
    cursor: default;
}

.arrow svg {
    width: 36px;
    height: 36px;
    color: #fff;
}

.arrow.left {
    margin-left: 1rem;
}

.arrow.right {
    margin-right: 1rem;
}

.scroll-track {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 0.5rem 1rem 1rem;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    flex: 1;
}

.scroll-track::-webkit-scrollbar {
    display: none;
}

.edition-card {
    flex-shrink: 0;
    width: 150px;
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 10px;
    padding: 1.25rem 1rem;
    text-align: center;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    scroll-snap-align: start;
    cursor: pointer;
}

.edition-card:hover {
    border-color: var(--red);
    transform: translateY(-7px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}

.edition-card.current {
    border-color: rgba(220, 38, 38, 0.5);
}

.ed-num {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
}

.ed-name {
    font-size: 11px;
    color: #888;
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
    min-height: 16px;
}

.ed-date {
    font-size: 11px;
    color: #555;
    margin-top: 4px;
}

.ed-tag {
    display: inline-block;
    margin-top: 10px;
    font-size: 10px;
    background: rgba(220, 38, 38, 0.12);
    color: var(--red);
    padding: 3px 10px;
    border-radius: 20px;
    letter-spacing: 0.5px;
}

.ed-tag.past {
    background: rgba(255, 255, 255, 0.04);
    color: #555;
}

.pillars-section {
    background: var(--bg);
    padding: 5rem 2.5rem;
}

.secret-section {
    background: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
    padding: 0 2.5rem 5rem;
}

.secret-card {
    position: relative;
    overflow: hidden;
    max-width: 920px;
    background: var(--bg-3);
    border: 0.5px solid rgba(220, 38, 38, 0.18);
    border-radius: 18px;
    padding: 2.5rem;
    text-align: center;
}

.secret-card > :not(.secret-glow) {
    position: relative;
    z-index: 1;
}

.secret-glow {
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, rgba(220, 38, 38, 0.14) 26%, rgba(185, 28, 28, 0.05) 48%, transparent 74%);
    filter: blur(14px);
    transform: translate(-50%, -50%);
    transition: left 0.14s ease-out, top 0.14s ease-out, opacity 0.25s ease, transform 0.25s ease;
    pointer-events: none;
    z-index: 0;
}

.secret-logo {
    position: relative;
    z-index: 1;
    width: min(360px, 75vw);
    height: auto;
    display: block;
    margin: 0 auto;
    user-select: none;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

.pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

.pillar-card {
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
}

.pillar-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(220, 38, 38, 0.1);
    border: 0.5px solid rgba(220, 38, 38, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: var(--red);
}

.pillar-icon svg {
    width: 20px;
    height: 20px;
}

.pillar-title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.5rem;
}

.pillar-text {
    font-size: 13px;
    color: #666;
    line-height: 1.7;
}

@media (max-width: 640px) {
    .pillars-grid {
        grid-template-columns: 1fr;
    }

    .pillars-section {
        padding: 3.5rem 1.5rem;
    }

    .secret-section {
        padding: 0 1.5rem 3.5rem;
    }

    .secret-card {
        padding: 2rem 1.25rem;
        border-radius: 14px;
    }

    .editions-header {
        padding: 0 1.5rem;
    }
}
</style>
