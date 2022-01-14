<template>
  <nav>
    <ul id="menu">
      <li>
        <router-link :to="{ name: 'barbers-list'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'search-barber'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </router-link>
      </li>
      <li id="menu__calendar">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#268596"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
            />
          </svg>
        </a>
      </li>
      <li>
        <router-link :to="{ name: 'fav-barbers-list'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
            />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'user-account'}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            />
          </svg>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HomeNavigation",
};
</script>

<style scoped>
nav {
  background: var(--dark-aqua);

  bottom: 0;
  min-height: 5vh;
  position: fixed;
  width: 100%;
}

#menu {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-around;
}

#menu a {
  color: var(--white);
}

#menu li:hover {
  opacity: 0.9;
}

#menu__calendar {
  background: var(--white);
  border: 2px solid var(--dark-aqua);
  border-radius: 50%;

  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  width: 50px;
}
</style>
