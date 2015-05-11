(function () {
    "use strict";

    fluid.defaults("colin.lichen.glRenderer", {
        gradeNames: ["aconite.videoCompositor.glRenderer", "autoInit"],

        shaders: {
            fragment: "bower_components/aconite/src/shaders/readTopLayerFragmentShader.frag",
            vertex: "bower_components/aconite/src/shaders/stageVertexShader.vert"
        }
    });

}());
