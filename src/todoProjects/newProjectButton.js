import { button } from "../dom/button";

export const newProjectButton = (()=>{
    const _element = button("new-project-button", true, "Add Project ＋");
    return _element;
})();