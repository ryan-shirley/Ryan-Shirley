import Vue from 'vue'
import ColourSwatchList from "../components/Foundation/ColourSwatch/SwatchList";
import ColourSwatch from "../components/Foundation/ColourSwatch/Swatch";
import FoundationSectionHeading from "../components/Foundation/Heading";
import FoundationTypeDetails from "../components/Foundation/TypeDetails";
import Navbar from "../components/Navbar";
import NavbarItem from "../components/NavbarItem";
import ClientLogoList from "../components/ClientLogoList";
import WorkProject from "../components/WorkProject";
import CustomFormInput from "../components/Forms/CustomFormInput";
import Footer from "../components/Footer";

Vue.component(ColourSwatchList.name, ColourSwatchList);
Vue.component(ColourSwatch.name, ColourSwatch);
Vue.component(FoundationSectionHeading.name, FoundationSectionHeading);
Vue.component(FoundationTypeDetails.name, FoundationTypeDetails);
Vue.component(Navbar.name, Navbar);
Vue.component(NavbarItem.name, NavbarItem);
Vue.component(ClientLogoList.name, ClientLogoList);
Vue.component(WorkProject.name, WorkProject);
Vue.component(CustomFormInput.name, CustomFormInput);
Vue.component(Footer.name, Footer);

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)