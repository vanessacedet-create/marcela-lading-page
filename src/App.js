import React, { useState } from 'react';

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subcategorias = [
    "Literatura Contemporânea Brasileira",
    "Ficção Científica Clássica", 
    "Romance Histórico",
    "Não-ficção Biografias",
    "Fantasia Épica",
    "Literatura Infantojuvenil",
    "Poesia Moderna",
    "Ensaios Filosóficos"
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Strings base64 das imagens
  const marcelaBase64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAaSQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAQ4BDgDASIAAhEBAxEB";
  const comp1Base64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAaSQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAcQBLADASIAAhEBAxEB";
  const comp2Base64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAaSQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAcQBLADASIAAhEBAxEB";

  return (
    <div style={{
      fontFamily: "'Nunito', sans-serif",
      backgroundColor: '#F5F1E8',
      padding: '0',
      margin: '0'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Nunito:wght@300;400;600;700;800&display=swap');

        .dropdown-container {
          position: relative;
          display: inline-block;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 1000;
          transform-origin: top;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: scaleY(0) translateY(-10px);
          pointer-events: none;
        }

        .dropdown-menu.open {
          opacity: 1;
          transform: scaleY(1) translateY(0);
          pointer-events: auto;
        }

        .dropdown-item {
          padding: 16px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid #F0F0F0;
          color: #2C3E50;
          font-weight: 500;
          font-size: 16px;
          background: white;
          transform: translateX(-20px);
          opacity: 0;
          animation: slideInItem 0.4s ease forwards;
        }

        .dropdown-item:nth-child(1) { animation-delay: 0.1s; }
        .dropdown-item:nth-child(2) { animation-delay: 0.15s; }
        .dropdown-item:nth-child(3) { animation-delay: 0.2s; }
        .dropdown-item:nth-child(4) { animation-delay: 0.25s; }
        .dropdown-item:nth-child(5) { animation-delay: 0.3s; }
        .dropdown-item:nth-child(6) { animation-delay: 0.35s; }
        .dropdown-item:nth-child(7) { animation-delay: 0.4s; }
        .dropdown-item:nth-child(8) { animation-delay: 0.45s; }

        @keyframes slideInItem {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .dropdown-item:hover {
          background: #F8F9FA;
          padding-left: 32px;
          color: #C4724C;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .main-button {
          background: #C4724C;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(196, 114, 76, 0.3);
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 320px;
        }

        .main-button:hover {
          background: #B5654A;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(196, 114, 76, 0.4);
        }

        .main-button:active {
          transform: translateY(0);
        }

        .migration-button {
          background: #D4AF37;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .migration-button:hover {
          background: #C19B26;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
        }

        .category-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          border-color: #C4724C;
        }

        .category-button {
          background: #C4724C;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(196, 114, 76, 0.3);
          align-self: flex-start;
        }

        .category-button:hover {
          background: #B5654A;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(196, 114, 76, 0.4);
        }

        .coupon-button {
          background: #4A6B7C;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(74, 107, 124, 0.3);
          text-transform: lowercase;
        }

        .coupon-button:hover {
          background: #3A5B6C;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(74, 107, 124, 0.4);
        }

        @media (max-width: 1024px) {
          .categories-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }

          .migration-layout {
            flex-direction: column !important;
            align-items: center !important;
            gap: 40px !important;
          }

          .migration-computers {
            flex-direction: row !important;
            margin-top: 0 !important;
          }
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            text-align: center;
          }
          
          .content-left {
            order: 2;
            margin-bottom: 32px;
          }
          
          .content-right {
            order: 1;
            margin-bottom: 32px;
          }

          .migration-section {
            padding: 40px 20px !important;
          }
          
          .migration-content {
            flex-direction: column !important;
            text-align: center !important;
          }

          .migration-layout {
            flex-direction: column !important;
            align-items: center !important;
            gap: 32px !important;
          }

          .migration-computers {
            flex-direction: column !important;
            margin-top: 0 !important;
            gap: 20px !important;
          }

          .computer-display {
            margin: 0 auto !important;
          }

          .categories-content {
            flex-direction: column !important;
          }

          .categories-grid {
            grid-template-columns: 1fr !important;
            margin-top: 32px !important;
          }

          .category-card {
            height: auto !important;
            min-height: 240px !important;
          }

          .coupon-section {
            padding: 40px 20px !important;
          }
        }
      `}</style>

      {/* Seção 1: Migração da Livraria */}
      <div className="migration-section" style={{
        background: '#483D5B',
        padding: '60px 32px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="migration-content" style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '36px',
              color: '#D4AF37',
              marginBottom: '32px',
              lineHeight: '1.3',
              fontWeight: '400'
            }}>
              A Livraria da Marcela está migrando para um novo endereço...
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '40px',
              color: '#E8DDD4',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Se você já me acompanhava pela Livraria da Marcela, este será o novo endereço oficial. 
              Agora sou embaixadora dos selos: Texugo, Edições Kírion e Ecclesiae Pequeninos. E vou 
              concentrar aqui todas as minhas indicações, campanhas e links de compra, organizados por 
              faixa etária e em um único lugar.
            </p>
          </div>

          {/* Layout com botão centralizado e computadores laterais */}
          <div className="migration-layout" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '60px'
          }}>
            
            {/* Computador 1 (Esquerda) */}
            <div className="computer-display" style={{
              perspective: '1000px'
            }}>
              <div style={{
                width: '280px',
                height: '180px',
                background: '#C0C0C0',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transform: 'rotateY(-5deg) rotateX(5deg)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '75%',
                  background: '#000',
                  borderRadius: '8px',
                  backgroundImage: `url(data:image/jpeg;base64,${comp1Base64})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                
                <div style={{
                  width: '70px',
                  height: '50px',
                  background: 'linear-gradient(145deg, #D0D0D0, #A0A0A0)',
                  margin: '8px auto 0',
                  borderRadius: '0 0 8px 8px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#909090',
                    position: 'absolute',
                    bottom: '0',
                    borderRadius: '0 0 8px 8px'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Botão Central */}
            <button className="migration-button">
              Ver minhas recomendações
            </button>

            {/* Computador 2 (Direita) */}
            <div className="computer-display" style={{
              perspective: '1000px'
            }}>
              <div style={{
                width: '280px',
                height: '180px',
                background: '#C0C0C0',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transform: 'rotateY(5deg) rotateX(5deg)',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '75%',
                  background: '#000',
                  borderRadius: '8px',
                  backgroundImage: `url(data:image/jpeg;base64,${comp2Base64})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                
                <div style={{
                  width: '70px',
                  height: '50px',
                  background: 'linear-gradient(145deg, #D0D0D0, #A0A0A0)',
                  margin: '8px auto 0',
                  borderRadius: '0 0 8px 8px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#909090',
                    position: 'absolute',
                    bottom: '0',
                    borderRadius: '0 0 8px 8px'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos de fundo */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(212, 175, 55, 0.1)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '150px',
          height: '150px',
          background: 'rgba(196, 114, 76, 0.1)',
          borderRadius: '50%',
          filter: 'blur(25px)'
        }}></div>
      </div>

      {/* Seção 2: Marcela */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 32px',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          width: '100%',
          zIndex: 10,
          position: 'relative'
        }} className="container">
          
          {/* Foto da Marcela */}
          <div className="content-left" style={{
            flex: '0 0 400px'
          }}>
            <div style={{
              width: '400px',
              height: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              backgroundImage: `url(data:image/jpeg;base64,${marcelaBase64})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.1))',
                borderRadius: '0 0 24px 24px'
              }}></div>
            </div>
          </div>

          {/* Conteúdo Textual */}
          <div className="content-right" style={{
            flex: 1
          }}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '48px',
              color: '#2C3E50',
              marginBottom: '32px',
              lineHeight: '1.2',
              fontWeight: '400'
            }}>
              Curadoria oficial da<br />
              Marcela Saint Martin
            </h1>

            <div style={{
              marginBottom: '32px',
              color: '#5D6D7E'
            }}>
              <div style={{
                borderBottom: '1px solid #E0E0E0',
                paddingBottom: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '18px',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Embaixadora exclusiva da <strong style={{fontWeight: '700'}}>TEXUGO</strong>
                </p>
              </div>

              <div style={{
                borderBottom: '1px solid #E0E0E0',
                paddingBottom: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '18px',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Mãe de cinco filhos
                </p>
              </div>

              <div style={{
                borderBottom: '1px solid #E0E0E0',
                paddingBottom: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '18px',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Especialista em <strong style={{fontWeight: '700'}}>leitura em voz alta</strong>
                </p>
              </div>

              <div style={{
                borderBottom: '1px solid #E0E0E0',
                paddingBottom: '16px',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '18px',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Autora do livro <em>O mínimo sobre leitura em voz alta</em>
                </p>
              </div>

              <div style={{
                paddingBottom: '16px'
              }}>
                <p style={{
                  fontSize: '18px',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Criadora do aplicativo <strong style={{fontWeight: '700'}}>Me Conta!</strong>
                </p>
              </div>
            </div>

            {/* Botão com Dropdown */}
            <div className="dropdown-container">
              <button 
                className="main-button"
                onClick={toggleDropdown}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                Ver minhas recomendações
                <span style={{
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '14px'
                }}>
                  ▼
                </span>
              </button>

              <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                {subcategorias.map((categoria, index) => (
                  <div 
                    key={index}
                    className="dropdown-item"
                    onClick={() => {
                      console.log(`Clicou em: ${categoria}`);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {categoria}
                  </div>
                ))}
              </div>
            </div>

            <p style={{
              fontSize: '14px',
              color: '#7F8C8D',
              marginTop: '24px',
              lineHeight: '1.5'
            }}>
              Mais de 10 anos dedicados à curadoria literária especializada,<br />
              conectando famílias aos melhores livros para cada momento.
            </p>
          </div>
        </div>
      </div>

      {/* Seção 3: Categorias por Idade */}
      <div style={{
        backgroundColor: '#F5F1E8',
        padding: '80px 32px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="categories-content" style={{
            display: 'flex',
            gap: '80px',
            alignItems: 'flex-start'
          }}>
            
            {/* Texto Lateral Esquerdo */}
            <div style={{
              flex: '0 0 400px'
            }}>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '42px',
                color: '#C4724C',
                marginBottom: '32px',
                lineHeight: '1.2',
                fontWeight: '400'
              }}>
                Encontre o livro certo pela idade
              </h2>

              <p style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#5D6D7E',
                marginBottom: '24px'
              }}>
                Comece pela idade da criança. Cada fase pede um <strong>tipo de história, de linguagem e de imagem</strong>, por isso organizei minhas indicações em grupos de idade, para facilitar a sua escolha.
              </p>
            </div>

            {/* Grid de Categorias */}
            <div style={{
              flex: 1
            }}>
              <div className="categories-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '32px'
              }}>
                
                {/* Card 3-5 anos */}
                <div className="category-card">
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      color: '#2C3E50',
                      marginBottom: '16px',
                      fontWeight: '700',
                      fontFamily: "'Nunito', sans-serif"
                    }}>
                      Histórias para ouvir, imaginar e pedir "lê de novo?" todos os dias
                    </h3>
                  </div>
                  
                  <button className="category-button">
                    Ver indicações para 3–5 anos
                  </button>
                </div>

                {/* Card 6-8 anos */}
                <div className="category-card">
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      color: '#2C3E50',
                      marginBottom: '16px',
                      fontWeight: '700',
                      fontFamily: "'Nunito', sans-serif"
                    }}>
                      Livros que acompanham as primeiras leituras mais independentes
                    </h3>
                  </div>
                  
                  <button className="category-button">
                    Ver indicações para 6–8 anos
                  </button>
                </div>

                {/* Card 9-12 anos */}
                <div className="category-card">
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      color: '#2C3E50',
                      marginBottom: '16px',
                      fontWeight: '700',
                      fontFamily: "'Nunito', sans-serif"
                    }}>
                      Histórias à altura de leitores em formação, que já pedem tramas mais complexas
                    </h3>
                  </div>
                  
                  <button className="category-button">
                    Ver indicações para 9–12 anos
                  </button>
                </div>

                {/* Card 8-8 anos */}
                <div className="category-card">
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      color: '#2C3E50',
                      marginBottom: '16px',
                      fontWeight: '700',
                      fontFamily: "'Nunito', sans-serif"
                    }}>
                      Livros que acompanham as primeiras leituras mais independentes
                    </h3>
                  </div>
                  
                  <button className="category-button">
                    Ver indicações para 8–8 anos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos de fundo */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '120px',
          height: '120px',
          background: 'rgba(196, 114, 76, 0.05)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(44, 62, 80, 0.05)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
      </div>

      {/* Seção 4: Cupom MARCELA */}
      <div className="coupon-section" style={{
        backgroundColor: '#E8DDE5',
        padding: '60px 32px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '32px',
            color: '#4A6B7C',
            marginBottom: '32px',
            lineHeight: '1.3',
            fontWeight: '400'
          }}>
            Benefício para quem acompanha meu trabalho
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#5D6D7E',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Agora você sempre ganha mais! Com o cupom <strong>MARCELA</strong>, você soma 5% de desconto às 
            promoções que já estiverem rolando no site. Aproveite esse benefício permanente em suas compras.
          </p>

          <button className="coupon-button">
            usar cupom na Texugo
          </button>
        </div>

        {/* Elementos decorativos de fundo */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'rgba(74, 107, 124, 0.1)',
          borderRadius: '50%',
          filter: 'blur(15px)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '90px',
          height: '90px',
          background: 'rgba(93, 109, 126, 0.08)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
      </div>
    </div>
  );
};

export default App;