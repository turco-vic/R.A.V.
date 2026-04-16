<template>
    <section class="page-hero">
        <div class="cross">✝</div>
        <div class="content">
            <p class="section-label">Fale conosco</p>
            <h1 class="section-title">Quer <span>participar?</span></h1>
            <p class="sub">Manda uma mensagem que a gente te conta tudo sobre a próxima edição.</p>
        </div>
    </section>

    <div class="divider"></div>

    <section class="contact-section">
        <div class="container">
            <div class="cards">
                <div class="card" v-for="c in contacts" :key="c.label">
                    <div class="card-label">{{ c.label }}</div>
                    <a :href="c.href" target="_blank" class="card-value">
                        <svg v-if="c.icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" class="ig-icon">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                        </svg>
                        <span>{{ c.value }}</span>
                    </a>
                </div>
            </div>

            <div class="form-wrap">
                <p class="section-label" style="margin-bottom: 2rem;">Enviar mensagem</p>
                <form @submit.prevent="send">
                    <div class="field-group">
                        <label>Nome</label>
                        <input v-model="form.name" type="text" placeholder="Seu nome completo" required />
                    </div>
                    <div class="field-group">
                        <label>E-mail</label>
                        <input v-model="form.email" type="email" placeholder="seu@email.com" required />
                    </div>
                    <div class="field-group">
                        <label>Mensagem</label>
                        <textarea v-model="form.message" placeholder="Escreva sua mensagem..." rows="5"
                            required></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;" :disabled="sent">
                        {{ sent ? 'Mensagem enviada! Em breve retornaremos.' : 'Enviar mensagem' }}
                    </button>
                    <p class="disclaimer">* As mensagens serão respondidas em breve pelos coordenadores.</p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sent = ref(false)
const form = reactive({ name: '', email: '', message: '' })

function send() {
    sent.value = true
    setTimeout(() => { sent.value = false }, 4000)
    form.name = ''
    form.email = ''
    form.message = ''
}

const contacts = [
    { label: 'Instagram', value: '@ravluzdaessencia', href: 'https://instagram.com/ravluzdaessencia', icon: true },
    { label: 'Local', value: "Paróquia Sant'Ana de Sousas", href: 'https://maps.google.com/?q=Paróquia+Sant+Ana+de+Sousas+Campinas' },
    { label: 'Comunidade', value: 'Luz da Essência', href: 'https://www.instagram.com/comluzdaessencia' },
    { label: 'Cidade', value: 'Campinas/SP', href: '#' },
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

.contact-section {
    background: var(--bg-2);
    padding: 5rem 2.5rem;
}

.container {
    max-width: 700px;
    margin: 0 auto;
}

.cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
}

.card {
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
}

.card-label {
    font-size: 11px;
    color: #555;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 6px;
}

.card-value {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    transition: color 0.2s;
}

.card-value:hover {
    color: var(--red);
}

.ig-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

.field-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1.25rem;
}

label {
    font-size: 13px;
    color: #888;
}

input,
textarea {
    background: var(--bg-3);
    border: 0.5px solid var(--border);
    border-radius: 8px;
    padding: 13px 16px;
    font-size: 14px;
    color: #fff;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
    resize: none;
}

input::placeholder,
textarea::placeholder {
    color: #444;
}

input:focus,
textarea:focus {
    border-color: var(--red);
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.disclaimer {
    font-size: 11px;
    color: #444;
    margin-top: 1rem;
    text-align: center;
}

@media (max-width: 640px) {
    .cards {
        grid-template-columns: 1fr;
    }

    .contact-section {
        padding: 3.5rem 1.5rem;
    }
}
</style>
