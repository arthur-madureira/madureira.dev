# Configuração do Giscus - Livro de Visitas

Este projeto implementa um sistema de comentários usando **Giscus** (GitHub Discussions) para o Livro de Visitas.

## 🚀 Como configurar

### 1. Configurar GitHub Discussions

1. Vá para o seu repositório no GitHub
2. Acesse **Settings** → **General** → **Features**
3. Marque a opção **Discussions**
4. Crie categorias como "Livro de Visitas" ou "General"

### 2. Obter configurações do Giscus

1. Acesse [giscus.app](https://giscus.app)
2. Insira o nome do seu repositório: `arthur-madureira/madureira.dev`
3. Configure as opções:
   - **Mapeamento**: "pathname" (recomendado)
   - **Categoria**: Selecione "Livro de Visitas" ou similar
   - **Tema**: Escolha conforme sua preferência
4. Copie os valores gerados: `data-repo-id` e `data-category-id`

### 3. Configurar variáveis de ambiente

Atualize o arquivo `.env.local`:

```bash
# Giscus Configuration for Guestbook
NEXT_PUBLIC_GISCUS_REPO=arthur-madureira/madureira.dev
NEXT_PUBLIC_GISCUS_REPO_ID=seu_repo_id_aqui
NEXT_PUBLIC_GISCUS_CATEGORY=Livro de Visitas
NEXT_PUBLIC_GISCUS_CATEGORY_ID=sua_category_id_aqui
```

### 4. Deploy na Vercel

1. Vá para o dashboard da Vercel
2. Acesse **Settings** → **Environment Variables**
3. Adicione todas as variáveis `NEXT_PUBLIC_GISCUS_*`
4. Faça o redeploy do projeto

## 📁 Estrutura dos arquivos criados

```
components/
├── giscus-comments.tsx          # Componente principal do Giscus
├── guestbook-section.tsx        # Seção completa do livro de visitas
├── guestbook-cta.tsx           # Call-to-action para o livro
├── theme-provider.tsx           # Provider para temas dark/light
└── simple-navigation.tsx        # Navegação simples

app/
├── guestbook/
│   └── page.tsx                 # Página dedicada do livro de visitas
├── layout.tsx                   # Layout atualizado com provider de tema
└── page.tsx                     # Homepage com CTA do guestbook
```

## ✨ Funcionalidades implementadas

- ✅ **Página dedicada** para o Livro de Visitas (`/guestbook`)
- ✅ **Suporte a temas** dark/light que sincroniza com o Giscus
- ✅ **Navegação simples** entre páginas
- ✅ **Call-to-action** na homepage
- ✅ **Design responsivo** e moderno
- ✅ **Configuração completa** do Giscus
- ✅ **Localização em português**

## 🎨 Personalização

### Alterar tema do Giscus
O tema é automaticamente sincronizado com o tema do site (dark/light).

### Modificar localização
No arquivo `giscus-comments.tsx`, linha 29:
```tsx
scriptElem.setAttribute("data-lang", "pt") // Altere para "en", "es", etc.
```

### Customizar categorias
Altere as variáveis de ambiente para usar outras categorias do GitHub Discussions.

## 🔧 Troubleshooting

**Giscus não carrega:**
- Verifique se as variáveis de ambiente estão corretas
- Confirme que o GitHub Discussions está habilitado
- Verifique se o `repo-id` e `category-id` estão corretos

**Tema não sincroniza:**
- Certifique-se de que o `next-themes` está instalado
- Verifique se o ThemeProvider está envolvendo a aplicação

**Comentários não aparecem:**
- Confirme que a categoria existe no GitHub Discussions
- Verifique se o mapeamento está configurado como "pathname"

## 📱 Acesso

- **Homepage**: `/` - Contém CTA para o livro de visitas
- **Livro de Visitas**: `/guestbook` - Página completa com comentários

---

Pronto! Seu Livro de Visitas está funcionando. Os visitantes podem comentar usando suas contas do GitHub! 🎉
