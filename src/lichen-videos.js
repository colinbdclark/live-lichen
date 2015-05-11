(function () {
    "use strict";

    fluid.defaults("colin.lichen.videoMetdata", {
        gradeNames: ["fluid.standardRelayComponent", "autoInit"],

        model: {
            water: {
                inTime: "00:00:00",
                outTime: "00:01:11",
                url: "videos/algonquin-lichen-web-export.m4v"
            },

            rock: {
                inTime: "00:01:12",
                outTime: "00:02:55",
                url: "videos/algonquin-lichen-web-export.m4v"
            },

            flatLichen: {
                inTime: "00:02:56",
                outTime: "00:05:20",
                url: "videos/algonquin-lichen-web-export.m4v"
            },

            pokeyLichen: {
                inTime: "00:05:24",
                outTime: "00:07:52",
                url: "videos/algonquin-lichen-web-export.m4v"
            }
        }
    });

    fluid.defaults("colin.lichen.topVideoLayer", {
        gradeNames: ["aconite.videoCompositor.topLayer", "autoInit"],

        components: {
            source: {
                options: {
                    model: "{clips}.model.pokeyLichen"
                }
            }
        }
    });

    fluid.defaults("colin.lichen.bottomVideoLayer", {
        gradeNames: ["aconite.videoCompositor.bottomLayer", "autoInit"],

        components: {
            source: {
                options: {
                    model: "{clips}.model.water"
                }
            }
        }
    });

}());
