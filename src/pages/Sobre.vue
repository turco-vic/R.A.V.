<template>
  <section class="page-hero">
    <div class="cross">✝</div>
    <div class="content">
      <p class="section-label">Quem somos</p>
      <h1 class="section-title">Sobre o <span>R.A.V.</span></h1>
      <p class="sub">Retiro de Aventura e Vida — uma experiência espiritual para a juventude.</p>
    </div>
  </section>

  <div class="divider"></div>

  <section class="about-grid-section">
    <div class="about-grid">
      <div class="text-block">
        <p class="section-label">Nossa história</p>
        <h2 class="section-title">Tradição em <span>Sousas</span></h2>
        <p class="body-text">O R.A.V. é organizado pela Comunidade Luz da Essência na Paróquia Sant'Ana de Sousas, em Campinas. Um evento tradicional na região, voltado para jovens que buscam uma experiência espiritual marcante.</p>
        <p class="body-text">Realizado frequentemente no início do ano, o retiro reúne jovens em torno da fé, da aventura e da vida — os três pilares que dão nome ao evento.</p>
        <div class="stats">
          <div class="stat"><div class="stat-num">25+</div><div class="stat-label">Edições</div></div>
          <div class="stat"><div class="stat-num">∞</div><div class="stat-label">Histórias</div></div>
        </div>
      </div>
      <div class="visual">
        <img src="/logorav.png" alt="Logo do R.A.V." class="visual-logo" />
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="mission-section">
    <div class="container">
      <p class="section-label">Missão</p>
      <h2 class="section-title">Promovendo <span>encontros</span> que ficam</h2>
      <div class="mission-grid">
        <div class="mission-card" v-for="m in mission" :key="m.title">
          <div class="m-title">{{ m.title }}</div>
          <div class="m-text">{{ m.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mission = [
  { title: 'Comunidade Luz da Essência', text: 'Organizadora do R.A.V., presente na Paróquia Sant\'Ana de Sousas, Campinas.' },
  { title: 'Para a juventude', text: 'Um espaço de crescimento espiritual, amizade e experiências que transformam a vida dos jovens.' },
  { title: 'Tradição regional', text: 'Evento tradicional em Sousas, realizado anualmente — a edição de 2026 aconteceu em fevereiro.' },
]
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    pointer-events: none;
    user-select: none;
    font-weight: 700;
    line-height: 1;
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

.about-grid-section {
    padding: 5rem 2.5rem;
    background: var(--bg-2);
}

.about-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.body-text {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.8;
    margin-bottom: 1rem;
}

.stats {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
}

.stat-num {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
}

.stat-label {
    font-size: 12px;
    color: #555;
    margin-top: 2px;
}

.visual {
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 12px;
    height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

  .visual-logo {
    width: min(320px, 75%);
    height: auto;
    display: block;
}

.mission-section {
    padding: 5rem 2.5rem;
    background: var(--bg);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

.mission-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

.mission-card {
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 10px;
    padding: 1.5rem;
    transition: border-color 0.2s;
}

.mission-card:hover {
    border-color: var(--red);
}

.m-title {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.75rem;
}

.m-text {
    font-size: 13px;
    color: #666;
    line-height: 1.7;
}

@media (max-width: 640px) {

    .about-grid,
    .mission-grid {
        grid-template-columns: 1fr;
    }

    .about-grid-section,
    .mission-section {
        padding: 3.5rem 1.5rem;
    }
}
</style>
