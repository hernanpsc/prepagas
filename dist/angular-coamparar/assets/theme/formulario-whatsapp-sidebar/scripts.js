(function (jQuery) {

    jQuery(document).ready(function(){

        jQuery("#form-whats").validate({

            rules:{nome:{required: true},ddd:{required: true,rangelength: [2,3]},telefone:{required: true,minlength: 9}},
            messages:{nome:{required: "O campo NOME é obrigatório"},ddd:{required: "O campo DDD é obrigatório"},telefone:{required: "O campo TELEFONE é obrigatório"}},

            submitHandler: function(form){

                var form = jQuery('#form-whats.form-whats-sidebar');
                var formErro = 0;
                jQuery(form).find('.required').each(function(index, obj){
                    if(jQuery(obj).val()==''){
                        formErro  += 1;
                        jQuery(obj).addClass('ErrorFormIw');
                    }
                });
                if(formErro ==0){
                    jQuery("#form-whats.form-whats-sidebar input[type='submit']").attr('disabled', true);
                    jQuery('#form-whats.form-whats-sidebar .loader').fadeIn();
                    var dados = form.serialize();
                    jQuery.ajax({
                        url : 'https://www.precosplanosdesaude.com.br/wp-content/themes/inaweb/formulario-whatsapp-sidebar/EnvioFormWhats.php',
                        type : 'POST',
                        data : dados,
                        dataType : 'json',
                        success : function(x){
                            console.log(x);

                            if (x.resp == 'success') {
                                jQuery('#form-whats.form-whats-sidebar').html('<span class="sucesso">SUCESSO!</span>');
                                setTimeout(function(){ window.location.href = 'https://www.precosplanosdesaude.com.br/obrigado/'; }, 3000);
                            }else{
                                jQuery('#form-whats.form-whats-sidebar').append('<span class="falha-envio">Ops! Aconteceu um erro e não foi possivel enviar seus dados.</span>');
                                setTimeout(function(){ jQuery('.falha-envio').fadeOut(); }, 5000);
                                jQuery("#form-whats.form-whats-sidebar input[type='submit']").attr('disabled', false);
                                jQuery('#form-whats.form-whats-sidebar .loader').fadeOut();
                            }
                        }
                    });
                }

            }

        });





        // MASCARAS
        jQuery("#ddd-whats").mask("900");
        jQuery("#telefone-whats").mask("90000-0000", {reverse: true});

        jQuery("input").focus(function(){
            jQuery(this).removeClass("error");
        });

        if(jQuery(window).width() <=950) {
            jQuery( ".page-id-10 .telefones-rodape .whatsapp" ).click(function(){
                jQuery("html, body").animate({ scrollTop: jQuery(".form-whats-sidebar").offset().top - 10 }, 1000);
                setTimeout(function(){ jQuery(".form-whats-sidebar #nome").focus(); }, 1500);
                return false;
            });

            jQuery(".form-whats-sidebar #nome, .form-whats-sidebar #ddd-whats, .form-whats-sidebar #telefone-whats").focus(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 10 }, 1000);});
        }




    });

}(window.jQuery || window.jQuery));