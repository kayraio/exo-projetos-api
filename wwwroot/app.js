const form = document.getElementById("project-form");
const message = document.getElementById("form-message");
const projectList = document.getElementById("project-list");
const reloadButton = document.getElementById("reload-btn");
const loading = document.getElementById("loading");

const apiUrl = "/api/projetos";

function setMessage(text, type) {
  message.textContent = text;
  message.classList.remove("success", "error");
  if (type) {
    message.classList.add(type);
  }
}

function renderProjects(projects) {
  projectList.innerHTML = "";

  if (!projects || projects.length === 0) {
    projectList.innerHTML = "<li class='project-item'>Nenhum projeto cadastrado ainda.</li>";
    return;
  }

  projects.forEach((project) => {
    const item = document.createElement("li");
    item.className = "project-item";

    const isActive = Boolean(project.status);
    const badgeClass = isActive ? "status-on" : "status-off";
    const badgeText = isActive ? "Ativo" : "Inativo";

    item.innerHTML = `
      <h3>${project.nomeDoProjeto ?? "Sem nome"}</h3>
      <p><strong>ID:</strong> ${project.id ?? "-"}</p>
      <p><strong>Area:</strong> ${project.area ?? "-"}</p>
      <span class="status-badge ${badgeClass}">${badgeText}</span>
    `;

    projectList.appendChild(item);
  });
}

async function loadProjects() {
  loading.style.display = "block";
  loading.textContent = "Carregando...";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Falha para carregar os projetos.");
    }

    const data = await response.json();
    renderProjects(data);
  } catch (error) {
    projectList.innerHTML = `<li class='project-item'>${error.message}</li>`;
  } finally {
    loading.style.display = "none";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage("Salvando projeto...", "");

  const payload = {
    nomeDoProjeto: form.nomeDoProjeto.value.trim(),
    area: form.area.value.trim(),
    status: form.status.checked
  };

  if (!payload.nomeDoProjeto || !payload.area) {
    setMessage("Preencha nome e area antes de salvar.", "error");
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Nao foi possivel salvar o projeto.");
    }

    form.reset();
    setMessage("Projeto salvo com sucesso!", "success");
    await loadProjects();
  } catch (error) {
    setMessage(error.message, "error");
  }
});

reloadButton.addEventListener("click", loadProjects);

loadProjects();
