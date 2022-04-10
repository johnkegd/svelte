import propertiesConfig from './geometriesProperties.json';
import GeometryUpdater from "./GeometryUpdater.js";

export default class GeometryDefaultGui {
    constructor() {

    }
    static addGui(mesh, gui) {
        const data = mesh.geometry.parameters;

        function generateGeometry() {
            GeometryUpdater.update(mesh, data);
        }

        if (gui) {
            Object.keys(data).forEach(property => {
                let guiConfig = propertiesConfig[mesh.geometry.type][property];
                if (guiConfig) {
                    if (guiConfig.min && guiConfig.max && guiConfig.step) {
                        gui.add(data, property).min(guiConfig.min).max(guiConfig.max).step(guiConfig.step).onChange(generateGeometry);
                    } else if (guiConfig.min && guiConfig.max) {
                        gui.add(data, property).min(guiConfig.min).max(guiConfig.max).onChange(generateGeometry);
                    }
                }
            });
        }
    }
}