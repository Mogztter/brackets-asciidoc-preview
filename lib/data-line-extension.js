// data-line extension thanks to https://github.com/asciidocfx/AsciidocFX

/* global Opal */

/* Generated by Opal 0.8.0 */
Opal.modules["image-data-line-treeprocessor/extension"] = function (Opal) {
    Opal.dynamic_require_severity = "ignore";
    var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2;

    if ($scope.get('RUBY_ENGINE')['$==']("opal")) {
    }
    ;
    self.$include(Opal.get('Asciidoctor'));
    return (function ($base, $super) {
        function $MapperTreeprocessor() {
        };
        var self = $MapperTreeprocessor = $klass($base, $super, 'MapperTreeprocessor', $MapperTreeprocessor);

        var def = self.$$proto, $scope = self.$$scope;

        return (def.$process = function (document) {
                var self = this;

                if (document.$attr('apply-data-line')['$nil?']())
                    return document;

                try {
                    document.$find_by().forEach(function (node) {
                        if (node && node.$source_location)
                            if (node.$source_location().lineno) {
                                var nodeName = node.node_name;
                                var lineno = node.$source_location().lineno;
                                node.$attributes()['$[]=']("role", "data-line-" + lineno);
                            }
                    });
                }
                catch (e) {
                    // doesn't apply data-line for labeled list
                }

                return document;
            }, nil) && 'process'
    })(self, (($scope.get('Extensions')).$$scope.get('Treeprocessor')));
};
/* Generated by Opal 0.8.0 */
Opal.modules["image-data-line-treeprocessor"] = function (Opal) {
    Opal.dynamic_require_severity = "ignore";
    var $a, $b, TMP_1, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

    if ($scope.get('RUBY_ENGINE')['$==']("opal")) {
        self.$require("image-data-line-treeprocessor/extension")
    }
    ;
    return ($a = ($b = $scope.get('Extensions')).$register, $a.$$p = (TMP_1 = function () {
        var self = TMP_1.$$s || this;

        return self.$treeprocessor($scope.get('MapperTreeprocessor'))
    }, TMP_1.$$s = self, TMP_1), $a).call($b);
};

Opal.require('image-data-line-treeprocessor');
Opal.require('image-data-line-treeprocessor/extension');
