<template>
  <q-page class="flex column q-pa-md">
    
    <span class="text-h1">Headlune 1</span>
    <span class="text-h2">Headlune 2</span>
    <span class="text-h3">Headlune 3</span>
    <span class="text-h4">Headlune 4</span>
    <span class="text-h5">Headlune 5</span>
    <span class="text-h6">Headlune 6</span>

    <q-separator />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator />

    <p class="text-body1">Maxime voluptas porro sed, sequi hic dolore vero nam ipsum eum minus ut placeat aut incidunt ipsa blanditiis a nemo deleniti consequatur.</p>
    <p class="text-body2">Error, quod expedita veniam modi unde consequatur similique. Dolor officia unde quia ad deserunt minima exercitationem, rerum maxime, consequatur molestias eos vel.</p>

    <q-separator />

    <span class="text-weight-thin">Est veniam laboris labore tempor occaecat amet mollit ullamco proident.</span> 
    <span class="text-weight-light">Eu adipisicing est labore excepteur ut commodo.</span> 
    <span class="text-weight-regular">Do aliquip anim adipisicing excepteur esse laborum tempor dolore officia quis et ad eiusmod.</span> 
    <span class="text-weight-medium">Tempor sit magna ad esse reprehenderit culpa aliquip veniam nostrud quis veniam anim do.</span> 
    <span class="text-weight-bold">Lorem proident ad deserunt nostrud.</span> 
    <span class="text-weight-bolder">Est officia ullamco laboris veniam excepteur quis eiusmod est culpa mollit.</span> 

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
      class="q-mt-md"
      @click="toggleSideMenu"
      ></q-btn>

      

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import useUI from "../composables/useUI";

export default defineComponent({
  name: 'Typography',
  setup() {

    const { sideMenuOpen, toggleSideMenu } = useUI()
  
    return {
      toggleSideMenu,
      sideMenuOpen,
      
      
    }
  }

  
})
</script>
