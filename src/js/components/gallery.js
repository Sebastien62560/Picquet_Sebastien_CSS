import recettes from './../../data/recipes.json';

export default function Gallery() {
  return {
    recipes: recettes.recipes,
    selectedRecipe: null,
    isModalOpen: false,
    difficultyFilter: '',
    filteredRecipes() {
      const filtered = this.recipes.filter(recipe => {
        if (this.difficultyFilter === '') return true;
        return recipe.difficulty === this.difficultyFilter;
      });
      return filtered.length > 0 ? filtered : null;
    },
    showRecipeDetails(recipe) {
      this.selectedRecipe = recipe;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedRecipe = null;
    },
    nextStep() {
      if (this.selectedRecipe && this.selectedRecipe.instructions) {
        if (this.stepIndex < this.selectedRecipe.instructions.length - 1) {
          this.stepIndex++;
        }
      }
    },
    prevStep() {
      if (this.selectedRecipe && this.selectedRecipe.instructions) {
        if (this.stepIndex > 0) {
          this.stepIndex--;
        }
      }
    },
    init() {
      this.stepIndex = 0;
    }
  };
}
