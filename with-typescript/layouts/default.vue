<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/about">About</NuxtLink> |
        <NuxtLink to="/users">Users List</NuxtLink> |
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    <Nuxt />
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
</template>
