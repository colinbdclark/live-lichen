(function () {
    "use strict";

    flock.init();

    fluid.defaults("colin.lichen", {
        gradeNames: [
            "aconite.videoCompositor",
            "aconite.animator.playable",
            "aconite.animator.debugging",
            "autoInit"
        ],

        components: {
            glRenderer: {
                type: "colin.lichen.glRenderer"
            },

            clips: {
                type: "colin.lichen.videoMetdata"
            },

            top: {
                type: "colin.lichen.topVideoLayer"
            },

            bottom: {
                type: "colin.lichen.bottomVideoLayer"
            }
        }
    });


}());
