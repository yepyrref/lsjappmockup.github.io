// Class definition
var FormSTT = function() {
    // Private functions
    var form_stt_widget = function() {

        var arrows;
        if (KTUtil.isRTL()) {
            arrows = {
                leftArrow: '<i class="la la-angle-right"></i>',
                rightArrow: '<i class="la la-angle-left"></i>'
            }
        } else {
            arrows = {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        }

        // basic
        $('#stt_datepicker_masuk').datepicker({
            rtl: KTUtil.isRTL(),
            format: "dd/mm/yyyy",
            todayHighlight: true,
            orientation: "bottom left",
            templates: arrows
        });

        $('#stt_datepicker_keluar').datepicker({
            rtl: KTUtil.isRTL(),
            format: "dd/mm/yyyy",
            todayHighlight: true,
            orientation: "bottom left",
            templates: arrows
        });

        $('#select2_pelanggan').select2({
            placeholder: "Silahkan pilih data pelanggan"
        });

        $('#select2_region_asal').select2({
            placeholder: "Pilih Region/Wilayah"
        });

        $('#select2_region_tujuan').select2({
            placeholder: "Pilih Region/Wilayah"
        });

         $('#select2_tipe_barang').select2({
            placeholder: "Pilih tipe barang"
        });

    }

    // Public functions
    return {
        init: function() {
            form_stt_widget();
        }
    };
}();

// Initialization
jQuery(document).ready(function() {
    FormSTT.init();
});