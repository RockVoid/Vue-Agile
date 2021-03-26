<template>
  <div class="container-fluid p-0">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/kanban" class="nav-link">Kanban</router-link>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/roque-souza-costa-6aa8171ba/"
        class="nav-link"
        >LinkedIn</a
      >
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.github.com/RockVoid"
        class="nav-link"
        >GitHub</a
      >
    </nav>
    <div class="container-fluid p-0">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: #f5f6fa;
  height: calc(100vh - 50px);
  min-width: 400px;
  max-width: 1080px;
}

.navbar {
  background-color: #2e86de;
  height: 50px;
}

.nav-link {
  color: #f5f6fa;
}

.nav-link:hover {
  color: #48dbfb;
}
</style>