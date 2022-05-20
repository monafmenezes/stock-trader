<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light"> Stock</span>
    </v-toolbar-title>
    <toolbar-items name="primeiro">
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portifólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </toolbar-items>

    <v-spacer></v-spacer>

      <v-btn flat to="/">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </vtoolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style></style>
