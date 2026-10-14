import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { platforms, characters, gamerProducts, initialCommunities, initialForumPosts } from './data'

function App() {
  // Controle de Navegação e Estados Gerais
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCharacterId, setSelectedCharacterId] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)

  // Modais e Formulários
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' })

  // Autenticação Fictícia e Menu Dropdown do Usuário
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [userLogado, setUserLogado] = useState(null)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  // Referência para fechar o menu ao clicar fora
  const userMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // ==========================================
  // ESTADOS DE PESQUISA
  // ==========================================
  const [searchCommunityQuery, setSearchCommunityQuery] = useState('')
  const [searchFriendQuery, setSearchFriendQuery] = useState('')

  // ==========================================
  // ESTADOS DA ABA DE PRODUTOS GAMER
  // ==========================================
  const [productCategoryFilter, setProductCategoryFilter] = useState('Todos')
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  const filteredProducts = productCategoryFilter === 'Todos'
    ? gamerProducts
    : gamerProducts.filter(p => p.category === productCategoryFilter)

  // ==========================================
  // ESTADOS DA ABA DE NOTÍCIAS
  // ==========================================
  const [realNews, setRealNews] = useState([])
  const [loadingNews, setLoadingNews] = useState(false)
  const [newsError, setNewsError] = useState(null)

  const newsSources = [
    { name: 'Voxel', url: 'https://www.voxel.com.br/rss' },
    { name: 'Adrenaline Games', url: 'https://www.adrenaline.com.br/games/rss/' },
    { name: 'IGN Brasil', url: 'https://br.ign.com/feed.xml' },
    { name: 'Eurogamer PT', url: 'https://www.eurogamer.pt/feed' }
  ]

  const fallbackNews = [
    {
      title: "Lançamentos de games da semana: principais títulos para PC e consoles",
      description: "Confira a lista completa dos jogos mais aguardados que chegam nesta semana para PlayStation, Xbox, Nintendo Switch e PC.",
      url: "https://br.ign.com/games",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "IGN Brasil" }
    },
    {
      title: "Atualizações e notícias do mercado gamer: Esports, Hardware e Consoles",
      description: "Acompanhe as principais novidades sobre a indústria dos videogames, atualizações de hardware e campeonatos de eSports.",
      url: "https://www.voxel.com.br/",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Voxel" }
    }
  ]

  const fetchRealNews = async () => {
    setLoadingNews(true)
    setNewsError(null)

    try {
      const fetchPromises = newsSources.map(async (source) => {
        try {
          const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}`)
          const data = await res.json()

          if (data.items && data.items.length > 0) {
            return data.items.map(item => ({
              title: item.title,
              description: item.description ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...' : 'Clique para ler a matéria completa sobre games.',
              url: item.link,
              image: item.enclosure?.link || item.thumbnail || (item.description && item.description.match(/src="([^"]+)"/)?.[1]) || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
              publishedAt: item.pubDate,
              source: { name: source.name }
            }))
          }
          return []
        } catch (err) {
          console.warn(`Erro ao carregar feed de ${source.name}:`, err)
          return []
        }
      })

      const results = await Promise.all(fetchPromises)
      let combinedArticles = results.flat()
      combinedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

      if (combinedArticles.length > 0) {
        setRealNews(combinedArticles)
      } else {
        setRealNews(fallbackNews)
      }
    } catch (err) {
      console.error("Erro ao carregar notícias de games:", err)
      setNewsError("Não foi possível carregar as notícias no momento.")
      setRealNews(fallbackNews)
    } finally {
      setLoadingNews(false)
    }
  }

  useEffect(() => {
    if (currentPage === 'news') {
      fetchRealNews()
    }
  }, [currentPage])

  // ==========================================
  // ESTADOS DO FÓRUM, COMUNIDADES E CRIAÇÃO
  // ==========================================
  const [selectedCommunityId, setSelectedCommunityId] = useState(null)
  const [unlockedCommunities, setUnlockedCommunities] = useState([])
  const [communityToUnlock, setCommunityToUnlock] = useState(null)
  
  const [pendingRequests, setPendingRequests] = useState([])
  const [requestStatusMessage, setRequestStatusMessage] = useState('')

  const [friendModalData, setFriendModalData] = useState(null)

  const [isCreateCommunityModalOpen, setIsCreateCommunityModalOpen] = useState(false)
  const [newCommunityData, setNewCommunityData] = useState({ name: '', desc: '', icon: '🌟', isPrivate: false })

  const [communities, setCommunities] = useState(initialCommunities)
  const [forumPosts, setForumPosts] = useState(initialForumPosts)
  
  const [newAuthor, setNewAuthor] = useState('')
  const [newText, setNewText] = useState('')

  const [replyingToPostId, setReplyingToPostId] = useState(null)
  const [replyAuthor, setReplyAuthor] = useState('')
  const [replyText, setReplyText] = useState('')

  // ==========================================
  // ESTADOS DO CHAT PRIVADO E AMIZADES
  // ==========================================
  const [privateChats, setPrivateChats] = useState([
    { id: 'marcos', name: 'Marcos Vinicius', avatar: 'M', lastMessage: 'Me chama mais tarde para jogarmos!', unread: 1 },
    { id: 'mariana', name: 'Mariana Costa', avatar: 'M', lastMessage: 'Conseguiu ver aquela placa de vídeo?', unread: 0 },
    { id: 'lucas', name: 'Lucas Silva', avatar: 'L', lastMessage: 'Valeu pelas dicas de setup!', unread: 0 }
  ])
  const [activeChatUserId, setActiveChatUserId] = useState(null)
  const [privateMessages, setPrivateMessages] = useState({
    marcos: [
      { sender: 'Marcos Vinicius', text: 'E aí, beleza?', time: '14:20' },
      { sender: 'Marcos Vinicius', time: '14:21', text: 'Me chama mais tarde para jogarmos!' }
    ],
    mariana: [
      { sender: 'Mariana Costa', time: '11:05', text: 'Conseguiu ver aquela placa de vídeo?' }
    ],
    lucas: [
      { sender: 'Lucas Silva', time: 'Ontem', text: 'Valeu pelas dicas de setup!' }
    ]
  })
  const [privateInputText, setPrivateInputText] = useState('')

  const checkAuthAndExecute = (actionCallback) => {
    if (!userLogado) {
      setIsLoginModalOpen(true)
      return false
    }
    if (actionCallback) actionCallback()
    return true
  }

  const scrollToForum = () => {
    if (currentPage !== 'home' || selectedCharacterId) {
      setCurrentPage('home')
      setSelectedCharacterId(null)
    }

    setTimeout(() => {
      const forumSection = document.getElementById('forum-destaque')
      if (forumSection) {
        forumSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const nomeSimulado = loginData.email.split('@')[0]
    const nomeFormatado = nomeSimulado.charAt(0).toUpperCase() + nomeSimulado.slice(1)

    setUserLogado(nomeFormatado)
    setNewAuthor(nomeFormatado)
    setReplyAuthor(nomeFormatado)
    setIsLoginModalOpen(false)
    setLoginData({ email: '', password: '' })
  }

  const handleLogout = () => {
    setUserLogado(null)
    setNewAuthor('')
    setReplyAuthor('')
    setCurrentPage('home')
    setSelectedCharacterId(null)
    setOpenAccordion(null)
    setIsUserMenuOpen(false)
    setSelectedCommunityId(null)
    setUnlockedCommunities([])
    setCommunityToUnlock(null)
    setActiveChatUserId(null)
    setFriendModalData(null)
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (!checkAuthAndExecute()) return
    if (!newAuthor.trim() || !newText.trim()) return
    if (!selectedCommunityId) return

    const newPost = {
      id: Date.now(),
      communityId: selectedCommunityId,
      author: newAuthor,
      text: newText,
      replies: []
    }

    setForumPosts([newPost, ...forumPosts])
    setNewText('')
  }

  const closeUnlockModal = () => {
    setCommunityToUnlock(null)
    setRequestStatusMessage('')
  }

  const handleEnterCommunity = (community) => {
    if (!community.isPrivate || unlockedCommunities.includes(community.id)) {
      setSelectedCommunityId(community.id)
      setReplyingToPostId(null)
      return
    }

    setCommunityToUnlock(community)
    setRequestStatusMessage('')
  }

  const handleSendJoinRequest = (e) => {
    e.preventDefault()
    if (!checkAuthAndExecute()) return
    if (!communityToUnlock) return

    const alreadyRequested = pendingRequests.some(
      req => req.communityId === communityToUnlock.id && req.userName === userLogado
    )

    if (alreadyRequested) {
      setRequestStatusMessage('Você já enviou uma solicitação para esta sala. Aguarde o Administrador aceitar.')
      return
    }

    setPendingRequests([...pendingRequests, { communityId: communityToUnlock.id, userName: userLogado }])
    setRequestStatusMessage('Solicitação enviada com sucesso ao Administrador! Aguardando aprovação.')
  }

  const handleAcceptRequest = (communityId, userName) => {
    setUnlockedCommunities(prev => [...prev, communityId])
    setPendingRequests(prev => prev.filter(req => !(req.communityId === communityId && req.userName === userName)))
  }

  const handleRejectRequest = (communityId, userName) => {
    setPendingRequests(prev => prev.filter(req => !(req.communityId === communityId && req.userName === userName)))
  }

  const handleCreateCommunitySubmit = (e) => {
    e.preventDefault()
    if (!checkAuthAndExecute()) return
    if (!newCommunityData.name.trim() || !newCommunityData.desc.trim()) return

    const newId = newCommunityData.name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString().slice(-4)
    const createdCommunity = {
      id: newId,
      name: newCommunityData.name,
      icon: newCommunityData.icon || '🌟',
      desc: newCommunityData.desc,
      isPrivate: newCommunityData.isPrivate
    }

    setCommunities([createdCommunity, ...communities])
    if (newCommunityData.isPrivate) {
      setUnlockedCommunities(prev => [...prev, newId])
    }

    setIsCreateCommunityModalOpen(false)
    setNewCommunityData({ name: '', desc: '', icon: '🌟', isPrivate: false })
    setSelectedCommunityId(newId)
  }

  const handleStartChatWithUser = (targetUserName) => {
    if (!checkAuthAndExecute()) return
    if (targetUserName.toLowerCase() === userLogado.toLowerCase()) return

    const existingChat = privateChats.find(c => c.name.toLowerCase() === targetUserName.toLowerCase())

    if (existingChat) {
      setActiveChatUserId(existingChat.id)
      setCurrentPage('chat')
    } else {
      setFriendModalData(targetUserName)
    }
  }

  // 1. MODIFICADO: AQUI AGORA O CHAT É CRIADO COM O ARRAY DE MENSAGENS VAZIO (SEM MENSAGEM AUTOMÁTICA)
  const handleConfirmFriendRequest = () => {
    if (!friendModalData) return
    const targetUserName = friendModalData

    const newChatId = targetUserName.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString().slice(-4)
    const newContact = {
      id: newChatId,
      name: targetUserName,
      avatar: targetUserName.charAt(0).toUpperCase(),
      lastMessage: 'Amizade adicionada.',
      unread: 0
    }

    setPrivateChats(prev => [newContact, ...prev])
    setPrivateMessages(prev => ({
      ...prev,
      [newChatId]: [] // Array de mensagens limpo, sem texto automático
    }))

    setFriendModalData(null)
    setActiveChatUserId(newChatId)
    setCurrentPage('chat')
  }

  const handleDeletePost = (postId) => {
    if (window.confirm("Tem certeza que deseja apagar esta publicação?")) {
      setForumPosts(forumPosts.filter(post => post.id !== postId))
    }
  }

  const handleDeleteReply = (postId, replyId) => {
    if (window.confirm("Tem certeza que deseja apagar esta resposta?")) {
      setForumPosts(forumPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            replies: post.replies.filter(reply => reply.id !== replyId)
          }
        }
        return post
      }))
    }
  }

  const handleReplySubmit = (e, postId) => {
    e.preventDefault()
    if (!checkAuthAndExecute()) return
    if (!replyAuthor.trim() || !replyText.trim()) return

    const newReply = {
      id: Date.now(),
      author: replyAuthor,
      text: replyText
    }

    setForumPosts(forumPosts.map(post => {
      if (post.id === postId) {
        return { ...post, replies: [...post.replies, newReply] }
      }
      return post
    }))

    setReplyText('')
    setReplyingToPostId(null)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert(`Mensagem enviada com sucesso! Obrigado pelo contato, ${contactData.name}.`)
    setContactData({ name: '', email: '', message: '' })
    setIsModalOpen(false)
  }

  const handleSendPrivateMessage = (e) => {
    e.preventDefault()
    if (!checkAuthAndExecute()) return
    if (!privateInputText.trim() || !activeChatUserId) return

    const newMessage = {
      sender: userLogado,
      text: privateInputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setPrivateMessages(prev => ({
      ...prev,
      [activeChatUserId]: [...(prev[activeChatUserId] || []), newMessage]
    }))

    setPrivateChats(prev => prev.map(chat => {
      if (chat.id === activeChatUserId) {
        return { ...chat, lastMessage: `Você: ${privateInputText}` }
      }
      return chat
    }))

    setPrivateInputText('')
  }

  const selectedCommunity = communities.find(c => c.id === selectedCommunityId)
  const selectedPlatform = platforms.find(p => p.id === currentPage)
  const selectedCharacter = characters.find(c => c.id === selectedCharacterId)

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const filteredPosts = forumPosts.filter(p => p.communityId === selectedCommunityId)
  
  const filteredCommunities = communities.filter(c => 
    c.name.toLowerCase().includes(searchCommunityQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchCommunityQuery.toLowerCase())
  )

  const filteredPrivateChats = privateChats.filter(chat =>
    chat.name.toLowerCase().includes(searchFriendQuery.toLowerCase())
  )

  const activeChatUser = privateChats.find(c => c.id === activeChatUserId)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={() => { setCurrentPage('home'); setSelectedCharacterId(null); setOpenAccordion(null); setActiveChatUserId(null); }} style={{ cursor: 'pointer' }}>
          <span className="logo-game">Arquivo</span>
          <span className="logo-mania">Gamer</span>
        </div>

        <nav className="nav-links">
          <a onClick={() => { setCurrentPage('home'); setSelectedCharacterId(null); setOpenAccordion(null); setActiveChatUserId(null); }}>Home</a>
          <a onClick={() => checkAuthAndExecute(scrollToForum)}>Fórum da comunidade</a>

          {!userLogado ? (
            <button onClick={() => setIsLoginModalOpen(true)} className="btn-login-header">
              Entrar
            </button>
          ) : (
            <div className="user-dropdown-container" ref={userMenuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                className={`user-profile-badge ${isUserMenuOpen ? 'active' : ''}`}
              >
                <div className="user-avatar-circle">
                  {userLogado.charAt(0).toUpperCase()}
                </div>
                <span className="user-name-text">{userLogado}</span>
                <span className={`dropdown-chevron ${isUserMenuOpen ? 'open' : ''}`}>▼</span>
              </button>

              {isUserMenuOpen && (
                <div className="user-dropdown-card">
                  <div className="dropdown-user-header">
                    <span className="dropdown-user-status">● On-line</span>
                    <span className="dropdown-user-name">{userLogado}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button 
                    className="dropdown-item-btn" 
                    onClick={() => { setCurrentPage('news'); setSelectedCharacterId(null); setActiveChatUserId(null); setIsUserMenuOpen(false); }}
                  >
                    <span className="dropdown-icon">📺</span> Notícias
                  </button>
                  <button 
                    className="dropdown-item-btn" 
                    onClick={() => { setCurrentPage('products'); setSelectedCharacterId(null); setActiveChatUserId(null); setIsUserMenuOpen(false); }}
                  >
                    <span className="dropdown-icon">🛒</span> Loja gamer
                  </button>
                  <button 
                    className="dropdown-item-btn" 
                    onClick={() => { setCurrentPage('chat'); setSelectedCharacterId(null); setIsUserMenuOpen(false); }}
                  >
                    <span className="dropdown-icon">💬</span> Mensagem direta
                  </button>
                  <button 
                    className="dropdown-item-btn" 
                    onClick={() => { setIsModalOpen(true); setIsUserMenuOpen(false); }}
                  >
                    <span className="dropdown-icon">✉️</span> Contato
                  </button>
                  <div className="dropdown-divider"></div>
                  <button 
                    className="dropdown-item-btn logout-btn" 
                    onClick={handleLogout}
                  >
                    <span className="dropdown-icon">🚪</span> Sair da Conta
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {currentPage === 'home' && !selectedCharacterId ? (
        <>
          <section id="home" className="hero">
            <h1>Arquivo<span className="logo-mania">Gamer</span></h1>
            <p className="hero-subtitle">A página ideal para os gamers</p>
            <p className="hero-desc">Sua central definitiva para celebrar a cultura dos videogames.</p>
          </section>

          <section id="importancia" className="section">
            <h2 className="section-title">A Importância dos Jogos</h2>
            <p className="section-subtitle">Muito além de apertar botões: arte, conexão e superação.</p>

            <div className="importance-box">
              <p className="importance-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', color: 'var(--text-color)' }}>
                Hoje, os videogames representam a forma de entretenimento mais completa e dinâmica da cultura humana. 
                Eles deixaram de ser apenas um passatempo individual para se tornarem um ponto de encontro global, 
                onde histórias emocionantes ganham vida através da interatividade. 
                <br /><br />
                Ao jogar, nós não somos meros espectadores: assumimos o controle, tomamos decisões difíceis, 
                treinamos nosso raciocínio rápido, desenvolvemos resiliência diante de desafios e criamos memórias afetivas inesquecíveis 
                com amigos e familiares. Seja na nostalgia de uma locadora do passado ou em uma partida online no presente, 
                os jogos conectam pessoas, superam barreiras e mostram que cada fase vencida é uma conquista que levamos para a vida real.
              </p>
            </div>
          </section>

          <section id="plataformas" className="section">
            <h2 className="section-title">Plataformas de jogos</h2>
            <p className="section-subtitle">Os ecossistemas que impulsionam a indústria gamer.</p>

            <div className="cards-grid">
              {platforms.map(p => (
                <div key={p.id} className={`card card-platform-${p.id}`}>
                  <div className="card-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <button 
                    onClick={() => checkAuthAndExecute(() => { setCurrentPage(p.id); setOpenAccordion(null); })} 
                    className="btn-card-details"
                  >
                    Ver mais →
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Personagens históricos</h2>
            <p className="section-subtitle">Os ícones que definiram gerações de jogadores.</p>

            <div className="cards-grid">
              {characters.map(ch => (
                <div key={ch.id} className="card card-character">
                  <img src={ch.image} alt={ch.title} className="card-character-bg" />
                  <div className="card-character-overlay"></div>
                  <div className="card-character-content">
                    <div className="card-body">
                      <h3>{ch.title}</h3>
                      <p>{ch.desc}</p>
                    </div>
                    <button 
                      onClick={() => checkAuthAndExecute(() => setSelectedCharacterId(ch.id))} 
                      className="btn-card-details"
                    >
                      Ver história →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="forum-destaque" className="section forum-banner-section">
            <div className="forum-banner-box">
              <h2>Participe da nossa comunidade!</h2>
              <p>Tem alguma história marcante, quer opinar sobre um jogo ou trocar ideia com outros gamers? Clique no botão abaixo e participe da nossa comunidade!</p>
              <button onClick={() => checkAuthAndExecute(() => { setCurrentPage('forum'); setSelectedCommunityId(null); })} className="btn-primary">Explorar comunidades</button>
            </div>
          </section>
        </>
      ) : currentPage === 'news' ? (
        <div className="news-page-container">
          <section className="section">
            <div className="forum-page-header">
              <button onClick={() => setCurrentPage('home')} className="btn-back">← Voltar para a Home</button>
              <h2 className="section-title">Notícias 📰</h2>
              <p className="section-subtitle">Últimas novidades e matérias publicadas no universo dos videogames.</p>
            </div>

            {loadingNews && (
              <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--primary-color)' }}>
                <h3>Buscando as últimas notícias...</h3>
              </div>
            )}

            {!loadingNews && (
              <div className="news-grid">
                {realNews.map((article, index) => (
                  <div key={index} className="news-card">
                    <div className="news-card-img-wrap">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" }} 
                      />
                      <span className="news-card-badge">{article.source?.name || 'Gamer Feed'}</span>
                    </div>
                    <div className="news-card-body">
                      <div className="news-card-date">
                        {new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="news-read-more"
                        style={{ display: 'inline-block', marginTop: 'auto', textDecoration: 'none' }}
                      >
                        Matéria completa ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      ) : currentPage === 'products' ? (
        <div className="news-page-container">
          <section className="section">
            <div className="forum-page-header">
              <button onClick={() => setCurrentPage('home')} className="btn-back">← Voltar para a Home</button>
              <h2 className="section-title">Vitrine de produtos gamer 🛒</h2>
              <p className="section-subtitle">Guia completo de colecionáveis, celulares, peças de PC e periféricos para o seu setup.</p>
            </div>

            <div className="forum-filter-bar" style={{ marginBottom: '2rem' }}>
              <span className="filter-label">Filtrar por categoria:</span>
              <div className="filter-tags">
                {['Todos', 'Bonecos & Collectibles', 'Celulares gamer', 'Peças de PC', 'Periféricos'].map((cat, idx) => (
                  <button 
                    key={idx}
                    className={`filter-tag ${productCategoryFilter === cat ? 'active' : ''}`}
                    onClick={() => setProductCategoryFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="news-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="news-card">
                  <div className="news-card-img-wrap">
                    <img src={product.image} alt={product.name} />
                    <span className="news-card-badge">{product.category}</span>
                  </div>
                  
                  <div className="news-card-body">
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{product.price}</span>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                          onClick={() => toggleWishlist(product.id)}
                          className={`btn-primary ${wishlist.includes(product.id) ? '' : 'btn-cancel-reply'}`}
                          style={{ fontSize: '0.75rem', padding: '0.4rem 0.6rem' }}
                        >
                          {wishlist.includes(product.id) ? '❤️' : '🤍'}
                        </button>

                        <a 
                          href={product.buyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-primary"
                          style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          Comprar ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : currentPage === 'chat' ? (
        <div className="chat-page-container">
          <section className="section">
            <div className="forum-page-header">
              <button onClick={() => setCurrentPage('home')} className="btn-back">← Voltar para a Home</button>
              <h2 className="section-title">Mensagem direta 💬</h2>
              <p className="section-subtitle">Converse diretamente com seus amigos na comunidade.</p>
            </div>

            <div className="chat-layout">
              <div className="chat-sidebar">
                <h3>Amigos</h3>
                
                <div className="search-bar-container" style={{ marginBottom: '1rem' }}>
                  <input 
                    type="text"
                    placeholder="🔍 Pesquisar amigo..."
                    value={searchFriendQuery}
                    onChange={(e) => setSearchFriendQuery(e.target.value)}
                    className="forum-input search-input"
                  />
                </div>

                <div className="chat-contacts-list">
                  {filteredPrivateChats.length === 0 ? (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '1rem 0' }}>
                      Nenhum amigo encontrado.
                    </p>
                  ) : (
                    filteredPrivateChats.map(contact => (
                      <div 
                        key={contact.id} 
                        className={`chat-contact-item ${activeChatUserId === contact.id ? 'active' : ''}`}
                        onClick={() => setActiveChatUserId(contact.id)}
                      >
                        <div className="chat-contact-avatar">{contact.avatar}</div>
                        <div className="chat-contact-info">
                          <span className="chat-contact-name">{contact.name}</span>
                          <span className="chat-contact-lastmsg">{contact.lastMessage}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="chat-window">
                {activeChatUser ? (
                  <>
                    <div className="chat-window-header">
                      <div className="chat-contact-avatar">{activeChatUser.avatar}</div>
                      <span className="chat-window-title">{activeChatUser.name}</span>
                    </div>

                    <div className="chat-messages-box">
                      {(privateMessages[activeChatUserId] || []).map((msg, index) => (
                        <div 
                          key={index} 
                          className={`chat-bubble ${msg.sender === userLogado ? 'outgoing' : 'incoming'}`}
                        >
                          <span className="chat-bubble-sender">{msg.sender}</span>
                          <p>{msg.text}</p>
                          <span className="chat-bubble-time">{msg.time}</span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendPrivateMessage} className="chat-input-form">
                      <input 
                        type="text" 
                        placeholder="Digite sua mensagem..." 
                        value={privateInputText}
                        onChange={(e) => setPrivateInputText(e.target.value)}
                        className="forum-input"
                        required
                      />
                      <button type="submit" className="btn-primary">Enviar</button>
                    </form>
                  </>
                ) : (
                  <div className="chat-placeholder">
                    <p>Selecione um amigo ao lado ou clique no nome de algum usuário no fórum para iniciar uma conversa.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      ) : selectedCharacterId && selectedCharacter ? (
        <div className="platform-detail-container">
          <section className="section">
            <button onClick={() => setSelectedCharacterId(null)} className="btn-back">← Voltar para a Home</button>
            
            <div className="platform-detail-box">
              <span style={{ background: 'var(--primary-color)', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                {selectedCharacter.company}
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: '1rem' }}>{selectedCharacter.title}</h2>
              
              <h3 className="games-section-title" style={{ marginTop: '1.5rem', marginBottom: '0.8rem' }}>História e trajetória:</h3>
              <p className="platform-history-desc">{selectedCharacter.history}</p>
              
              <h3 className="games-section-title" style={{ marginTop: '1.5rem', marginBottom: '0.8rem' }}>Impacto na indústria:</h3>
              <p className="platform-history-desc" style={{ fontStyle: 'italic', borderLeft: '3px solid var(--primary-color)', paddingLeft: '1rem' }}>
                "{selectedCharacter.impact}"
              </p>

              <h3 className="games-section-title" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Principais jogos marcantes:</h3>
              <ul className="games-list">
                {selectedCharacter.mainGames.map((game, idx) => (
                  <li key={idx} className="game-tag">{game}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ) : currentPage === 'forum' ? (
        <div className="forum-page-container">
          <section className="section">
            {!selectedCommunity ? (
              <>
                <div className="forum-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <button onClick={() => setCurrentPage('home')} className="btn-back">← Voltar para a Home</button>
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Comunidades</h2>
                    <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: 0 }}>Escolha uma comunidade para fazer parte.</p>
                  </div>
                  <button 
                    onClick={() => checkAuthAndExecute(() => setIsCreateCommunityModalOpen(true))} 
                    className="btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    ✨ Criar comunidade
                  </button>
                </div>

                <div className="search-bar-container" style={{ marginTop: '1.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="🔍 Buscar comunidade por nome ou tema..." 
                    value={searchCommunityQuery}
                    onChange={(e) => setSearchCommunityQuery(e.target.value)}
                    className="forum-input search-input"
                  />
                </div>

                {pendingRequests.length > 0 && (
                  <div className="admin-approval-panel" style={{ marginTop: '2rem' }}>
                    <h3>🛠️ Painel do administrador (Pendências de acesso)</h3>
                    <div className="admin-requests-list">
                      {pendingRequests.map((req, idx) => {
                        const comm = communities.find(c => c.id === req.communityId)
                        return (
                          <div key={idx} className="admin-request-item">
                            <span>
                              <strong 
                                onClick={() => handleStartChatWithUser(req.userName)}
                                className="clickable-username"
                                title="Clique para conversar"
                              >
                                {req.userName}
                              </strong> quer entrar na sala <em>{comm?.name}</em>
                            </span>
                            <div className="admin-request-btns">
                              <button onClick={() => handleAcceptRequest(req.communityId, req.userName)} className="btn-primary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Aceitar</button>
                              <button onClick={() => handleRejectRequest(req.communityId, req.userName)} className="btn-cancel-reply" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Recusar</button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="communities-grid" style={{ marginTop: '2rem' }}>
                  {filteredCommunities.length === 0 ? (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                      <h3>Nenhuma comunidade encontrada para "{searchCommunityQuery}"</h3>
                      <p>Tente buscar por outros termos ou crie uma nova comunidade!</p>
                    </div>
                  ) : (
                    filteredCommunities.map(c => {
                      const isUnlocked = !c.isPrivate || unlockedCommunities.includes(c.id)
                      const postCount = forumPosts.filter(p => p.communityId === c.id).length

                      return (
                        <div key={c.id} className={`community-card ${c.isPrivate ? 'private' : 'public'}`}>
                          <div className="community-card-top">
                            <div className="community-icon">{c.icon}</div>
                            <span className={`community-type-badge ${c.isPrivate ? 'private' : 'public'}`}>
                              {c.isPrivate ? '🔒 Privada' : '🌐 Pública'}
                            </span>
                          </div>

                          <h3>{c.name}</h3>
                          <p>{c.desc}</p>

                          <div className="community-card-footer">
                            <span className="community-post-count">
                              {postCount} {postCount === 1 ? 'publicação' : 'publicações'}
                            </span>
                            <button onClick={() => handleEnterCommunity(c)} className="btn-community-enter">
                              {isUnlocked ? 'Entrar →' : '🔒 Solicitar Acesso'}
                            </button>
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="forum-page-header">
                  <button
                    onClick={() => { setSelectedCommunityId(null); setReplyingToPostId(null) }}
                    className="btn-back"
                  >
                    ← Voltar às Comunidades
                  </button>
                  <h2 className="section-title">{selectedCommunity.icon} {selectedCommunity.name}</h2>
                  <p className="section-subtitle">{selectedCommunity.desc} </p>
                </div>

                <div className="forum-container">
                  <form onSubmit={handlePostSubmit} className="forum-form">
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Criar nova publicação</h3>

                    <input
                      type="text"
                      placeholder="Seu nome ou apelido gamer"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="forum-input"
                      required
                    />
                    <textarea
                      placeholder="Escreva sua mensagem ou inicie uma discussão nesta comunidade..."
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      className="forum-textarea"
                      required
                    ></textarea>
                    <button type="submit" className="btn-primary">Publicar na comunidade</button>
                  </form>

                  <div className="forum-posts">
                    {filteredPosts.length === 0 ? (
                      <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                        Nenhuma publicação nesta comunidade ainda. Seja o primeiro a publicar!
                      </p>
                    ) : (
                      filteredPosts.map(post => (
                        <div key={post.id} className="post-item">
                          <div className="post-header-top">
                            <span 
                              className="post-author clickable-username"
                              onClick={() => handleStartChatWithUser(post.author)}
                              title="Clique para adicionar amigo e conversar"
                            >
                              💬 {post.author}
                            </span>
                          </div>

                          <div className="post-content">{post.text}</div>

                          {post.replies && post.replies.length > 0 && (
                            <div className="replies-container">
                              {post.replies.map(reply => (
                                <div key={reply.id} className="reply-item">
                                  <div 
                                    className="reply-author clickable-username"
                                    onClick={() => handleStartChatWithUser(reply.author)}
                                    title="Clique para adicionar amigo e conversar"
                                  >
                                    💬 {reply.author}
                                  </div>
                                  <div className="reply-content">{reply.text}</div>

                                  {/* 2. ADICIONADO: BOTÃO DE APAGAR APLICADO TAMBÉM NAS RESPOSTAS SE O USUÁRIO FOR O DONO */}
                                  {userLogado && userLogado.toLowerCase() === reply.author.toLowerCase() && (
                                    <button
                                      onClick={() => handleDeleteReply(post.id, reply.id)}
                                      className="btn-delete-icon"
                                      title="Apagar resposta"
                                    >
                                      ✕
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="post-footer">
                            {replyingToPostId !== post.id ? (
                              <button
                                onClick={() => checkAuthAndExecute(() => setReplyingToPostId(post.id))}
                                className="btn-reply-toggle"
                              >
                                Responder comentário
                              </button>
                            ) : (
                              <div></div>
                            )}

                            {userLogado && userLogado.toLowerCase() === post.author.toLowerCase() && (
                              <button
                                onClick={() => handleDeletePost(post.id)}
                                className="btn-delete-icon"
                                title="Apagar publicação"
                              >
                                ✕
                              </button>
                            )}
                          </div>

                          {replyingToPostId === post.id && (
                            <form onSubmit={(e) => handleReplySubmit(e, post.id)} className="reply-form">
                              <input
                                type="text"
                                placeholder="Seu nome"
                                value={replyAuthor}
                                onChange={(e) => setReplyAuthor(e.target.value)}
                                className="forum-input"
                                required
                              />
                              <textarea
                                placeholder="Escreva sua resposta..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="forum-textarea"
                                required
                              ></textarea>
                              <div className="reply-buttons">
                                <button type="submit" className="btn-primary">Enviar resposta</button>
                                <button
                                  type="button"
                                  onClick={() => setReplyingToPostId(null)}
                                  className="btn-cancel-reply"
                                >
                                  Cancelar
                                </button>
                              </div>
                            </form>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      ) : selectedPlatform ? (
        <div className="platform-detail-container">
          <section className="section">
            <button onClick={() => { setCurrentPage('home'); setOpenAccordion(null); }} className="btn-back">← Voltar para a Home</button>
            
            <div className="platform-detail-box">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>{selectedPlatform.title}</h2>
              <p className="platform-history-desc">{selectedPlatform.mainOverview}</p>
              
              <h3 className="games-section-title" style={{ marginTop: '2rem', marginBottom: '1.2rem' }}>Evolução e gerações:</h3>
              
              <div className="accordion-container">
                {selectedPlatform.consoles.map((con) => (
                  <div key={con.id} className="accordion-item">
                    <button 
                      className={`accordion-header ${openAccordion === con.id ? 'active' : ''}`}
                      onClick={() => toggleAccordion(con.id)}
                    >
                      <span>{con.name}</span>
                      <span className={`accordion-arrow ${openAccordion === con.id ? 'rotate' : ''}`}>▼</span>
                    </button>

                    {openAccordion === con.id && (
                      <div className="accordion-content">
                        <div className="accordion-img-container">
                          <img src={con.image} alt={con.name} className="accordion-console-img" />
                        </div>
                        <p className="accordion-history">{con.history}</p>
                        <h4 className="accordion-games-title">Jogos marcantes:</h4>
                        <ul className="games-list">
                          {con.games.map((g, idx) => (
                            <li key={idx} className="game-tag">{g}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : null}

      {/* MODAL DE SOLICITAÇÃO DE AMIZADE */}
      {friendModalData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2>👥 Adicionar amigo</h2>
                <p>Você ainda não tem <strong>{friendModalData}</strong> adicionada como amizade.</p>
              </div>
              <button className="close-btn" onClick={() => setFriendModalData(null)}>✕</button>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                Não é possível enviar mensagem direta sem antes possuir amizade. Deseja enviar uma <strong>solicitação de amizade</strong> para <span style={{ color: 'var(--primary-color)' }}>{friendModalData}</span> agora mesmo?
              </p>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  type="button" 
                  onClick={handleConfirmFriendRequest} 
                  className="btn-primary" 
                  style={{ flex: 1 }}
                >
                  Sim, Enviar solicitação e conversar
                </button>
                <button 
                  type="button" 
                  onClick={() => setFriendModalData(null)} 
                  className="btn-cancel-reply" 
                  style={{ flex: 1 }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CRIAR COMUNIDADE */}
      {isCreateCommunityModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2>Criar nova comunidade</h2>
                <p>Monte sua própria sala pública ou privada.</p>
              </div>
              <button className="close-btn" onClick={() => setIsCreateCommunityModalOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleCreateCommunitySubmit}>
              <div className="form-group">
                <label>Nome da comunidade</label>
                <input 
                  type="text" 
                  placeholder="Ex: Fãs de RPG de Turno" 
                  value={newCommunityData.name}
                  onChange={(e) => setNewCommunityData({...newCommunityData, name: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Emoji / Ícone</label>
                <input 
                  type="text" 
                  placeholder="Ex: ⚔️" 
                  value={newCommunityData.icon}
                  onChange={(e) => setNewCommunityData({...newCommunityData, icon: e.target.value})}
                  maxLength={4}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Descrição</label>
                <textarea 
                  placeholder="Sobre o que é esta comunidade?"
                  value={newCommunityData.desc}
                  onChange={(e) => setNewCommunityData({...newCommunityData, desc: e.target.value})}
                  required
                ></textarea>
              </div>

              <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="checkbox" 
                  id="privateCheck"
                  checked={newCommunityData.isPrivate}
                  onChange={(e) => setNewCommunityData({...newCommunityData, isPrivate: e.target.checked})}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary-color)' }}
                />
                <label htmlFor="privateCheck" style={{ cursor: 'pointer', color: '#fff', marginBottom: 0 }}>
                  Tornar esta comunidade privada (exige aprovação para novos membros)
                </label>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Criar comunidade</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE SOLICITAÇÃO DE ACESSO À COMUNIDADE PRIVADA */}
      {communityToUnlock && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2>🔒 {communityToUnlock.name}</h2>
                <p>Sala privada. Envie uma solicitação para o Administrador aprovar sua entrada.</p>
              </div>
              <button className="close-btn" onClick={closeUnlockModal}>✕</button>
            </div>

            <form onSubmit={handleSendJoinRequest}>
              <div className="form-group" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Deseja enviar uma solicitação de acesso em nome de <strong>{userLogado || 'Visitante'}</strong>?
                </p>
                {requestStatusMessage && (
                  <span className="password-error" style={{ color: requestStatusMessage.includes('sucesso') ? 'var(--accent-cyan)' : '#f87171' }}>
                    {requestStatusMessage}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Enviar solicitação ao ADM</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE LOGIN */}
      {isLoginModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2>Acessar Arquivo Gamer</h2>
                <p>Faça login para interagir na comunidade e chats.</p>
              </div>
              <button className="close-btn" onClick={() => setIsLoginModalOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Senha</label>
                <input 
                  type="password" 
                  placeholder="Sua senha" 
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  required 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Entrar na conta</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE CONTATO */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h2>Fale com o Arquivo Gamer</h2>
                <p>Envie sugestões, ideias ou feedbacks para o projeto.</p>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label>Seu nome</label>
                <input 
                  type="text" 
                  placeholder="Digite seu nome" 
                  value={contactData.name}
                  onChange={(e) => setContactData({...contactData, name: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Seu E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  value={contactData.email}
                  onChange={(e) => setContactData({...contactData, email: e.target.value})}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Sua sugestão / mensagem</label>
                <textarea 
                  placeholder="O que você gostaria de ver por aqui?"
                  value={contactData.message}
                  onChange={(e) => setContactData({...contactData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">Enviar mensagem</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App