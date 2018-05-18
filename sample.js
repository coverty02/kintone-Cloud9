/**
 * @fileoverview sample.js
 * 更新日                   2018/03/26
 */
/* global kintone */

(function() {
    "use strict";
    
    /**
     * レコード新規作成時
     */
    kintone.events.on('app.record.create.show', function(event) {
        var record = event.record;
        
        alert('Hello World');
        
        return event;
    });

})();
