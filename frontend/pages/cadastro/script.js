// Efeito de luz seguindo o cursor
const welcomeSide = document.getElementById('welcomeSide');
const lightEffect = document.createElement('div');
lightEffect.style.cssText = `
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
    z-index: 1;
`;
welcomeSide.appendChild(lightEffect);

welcomeSide.addEventListener('mousemove', (e) => {
    const rect = welcomeSide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    lightEffect.style.left = x + 'px';
    lightEffect.style.top = y + 'px';
    lightEffect.style.opacity = '1';
});

welcomeSide.addEventListener('mouseleave', () => {
    lightEffect.style.opacity = '0';
});

// Efeito de luz seguindo o cursor no formulário
const formSide = document.querySelector('.form-side'); // Use querySelector com .
const lightEffect2 = document.createElement('div');
lightEffect2.style.cssText = `
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(37, 144, 231, 0.58) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
    z-index: 1;
`;
formSide.appendChild(lightEffect2);

formSide.addEventListener('mousemove', (e) => {
    const rect = formSide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    lightEffect2.style.left = x + 'px';
    lightEffect2.style.top = y + 'px';
    lightEffect2.style.opacity = '1';
});

formSide.addEventListener('mouseleave', () => {
    lightEffect2.style.opacity = '0';
});


let isLoginView = false;
function toggleForm() {
  isLoginView = !isLoginView;

  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const welcomeTitle = document.getElementById("welcomeTitle");
  const welcomeText = document.getElementById("welcomeText");
  const switchBtn = document.getElementById("switchBtn");

  if (isLoginView) {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    welcomeTitle.textContent = "Novo por aqui?";
    welcomeText.textContent =
      "Cadastre-se agora e comece a gerenciar o consumo dos seus clientes";
    switchBtn.textContent = "CADASTRAR";
  } else {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    welcomeTitle.textContent = "Bem-vindo de volta";
    welcomeText.textContent =
      "Acesse sua conta para gerenciar o consumo dos seus clientes";
    switchBtn.textContent = "ENTRAR";
  }
}

function handleSignup(e) {
  e.preventDefault();
  alert("Cadastro realizado com sucesso! (Integre com seu backend)");
}

function handleLogin(e) {
  e.preventDefault();
  alert("Login realizado com sucesso! (Integre com seu backend)");
}
