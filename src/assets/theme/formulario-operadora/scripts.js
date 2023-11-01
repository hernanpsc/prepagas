(function (jQuery) {

	jQuery(document).ready(function(){

		jQuery("#form").validate({

			rules:{
				idTipo:{required: true},
				possuiCNPJ:{required: true},
				possuiPlano:{required: true},
				nome:{required: true},
				email:{required: true,email: true},
				ddd:{required: true,rangelength: [2,3]},
				telefone:{required: true,minlength: 9}
			},

			messages:{
				idTipo:{required: "Selecione uma opção"},
				possuiCNPJ:{required: "Selecione uma opção"},
				possuiPlano:{required: "Selecione uma opção"},
				nome:{required: "O campo NOME é obrigatório"},
				email:{required: "O campo EMAIL é obrigatório",email: "Informe um EMAIL válido"},
				ddd:{required: "O campo DDD é obrigatório"},
				telefone:{required: "O campo TELEFONE é obrigatório"}
			},

			submitHandler: function(form){
				var form = jQuery('#form');
				var formErro = 0;
				jQuery(form).find('.required').each(function(index, obj){
					if(jQuery(obj).val()==''){
						formErro  += 1;
						jQuery(obj).addClass('ErrorFormIw');
					}
				});

				if(formErro ==0){
					jQuery("#form input[type='submit']").attr('disabled', true);
					jQuery('#form .loader').fadeIn();
					var dados = form.serialize();
					jQuery.ajax({
						url : 'https://www.precosplanosdesaude.com.br/wp-content/themes/inaweb/formulario-operadora/EnvioForm.php',
						type : 'POST',
						data : dados,
						dataType : 'json',
						success : function(x){
							console.log(x);

							if (x.resp == 'success') {
								jQuery("#form input[type='submit']").hide();
								jQuery('#form .loader').hide();
								jQuery('#form').append('<span class="sucesso">SUCESSO!</span>');
								salvaCookies();
								setTimeout(function(){ window.location.href = 'https://www.precosplanosdesaude.com.br/obrigado/'; }, 3000);
							}else{
								jQuery('#form').append('<span class="falha-envio">' + x.resp + '</span>');
								jQuery("#form input[type='submit']").hide();
								jQuery('#form .loader').hide();

								setTimeout(function(){
									jQuery('#form .falha-envio').hide();
									jQuery("#form input[type='submit']").fadeIn();
									jQuery("#form input[type='submit']").attr('disabled', false);
								}, 3000);
							}
						}
					});
				}
			}

		});



		// TIPO DO PLANO
		jQuery(".possui-cnpj").hide();
		jQuery(".quantidade-de-pessoas").hide();

		jQuery('.btn-individual').click(function() {
			jQuery(".tipo-de-plano b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".tipo-de-plano p").addClass('ok');
			jQuery('input:radio[name=idTipo]')[0].checked = true;
			jQuery(".possui-cnpj").hide();
			jQuery('input:radio[name=possuiCNPJ]')[1].checked = true;
			jQuery(".possui-cnpj p").removeClass('ok');
			jQuery("#idTipo-error").fadeOut();
			jQuery(".quantidade-de-pessoas").fadeOut();
			jQuery('.quantidade-de-pessoas select').val( jQuery('option:contains("Selecione")').val());
		});

		jQuery('.btn-familiar').click(function() {
			jQuery(".tipo-de-plano b, .possui-cnpj b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".tipo-de-plano p").addClass('ok');
			jQuery('input:radio[name=idTipo]')[1].checked = true;
			jQuery(".possui-cnpj").fadeIn();
			jQuery('input:radio[name=possuiCNPJ]')[1].checked = true;
			jQuery("#idTipo-error").fadeOut();
			jQuery(".quantidade-de-pessoas").fadeIn();
		});

		jQuery('.btn-empresarial').click(function() {
			jQuery(".tipo-de-plano b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".tipo-de-plano p").addClass('ok');
			jQuery('input:radio[name=idTipo]')[2].checked = true;
			jQuery(".possui-cnpj").hide();
			jQuery('input:radio[name=possuiCNPJ]')[0].checked = true;
			jQuery(".possui-cnpj p").removeClass('ok');
			jQuery("#idTipo-error").fadeOut();
			jQuery(".quantidade-de-pessoas").fadeIn();
		});


		// SE POSSUI OPERADORA
		//jQuery(".operadora").hide();
		jQuery('.btn-sim').click(function() {
			jQuery(".possui-plano b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".possui-plano p").addClass('ok');
			jQuery('input:radio[name=possuiPlano]')[0].checked = true;
			//jQuery(".operadora").fadeIn();
			jQuery("#possuiPlano-error").fadeOut();
		});
		jQuery('.btn-nao').click(function() {
			jQuery(".possui-plano b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".possui-plano p").addClass('ok');
			jQuery('input:radio[name=possuiPlano]')[1].checked = true;
			//jQuery(".operadora").fadeOut();
			jQuery("#possuiPlano-error").fadeOut();
		});











		// SE POSSUI CNPJ
		jQuery('.btn-sim-cnpj').click(function() {
			jQuery(".possui-cnpj b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".possui-cnpj p").addClass('ok');
			jQuery('input:radio[name=possuiCNPJ]')[0].checked = true;
			jQuery("#possuiCNPJ-error").fadeOut();
		});

		jQuery('.btn-nao-cnpj').click(function() {
			jQuery(".possui-cnpj b").removeClass('ativa');
			jQuery(this).addClass('ativa');
			jQuery(".possui-cnpj p").addClass('ok');
			jQuery('input:radio[name=possuiCNPJ]')[1].checked = true;
			jQuery("#possuiCNPJ-error").fadeOut();
		});








		// .LOAD
		jQuery(window).load(function (){

			if(jQuery(window).width() >=950) {
				jQuery('.bandeiras img').click(function(){
					jQuery("html, body").animate({ scrollTop: jQuery(".form-cotacao").offset().top - 100 }, 1000);
				});
			} else{
				jQuery('.bandeiras img').click(function(){
					jQuery("html, body").animate({ scrollTop: jQuery(".form-cotacao").offset().top }, 1000);
				});

				jQuery('.btn-sim-cnpj').click(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 65 }, 1000);});
				jQuery('.btn-nao-cnpj').click(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 65 }, 1000);});
				jQuery('.btn-sim').click(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 65 }, 1000);});
				jQuery('.btn-nao').click(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 65 }, 1000);});

				jQuery( ".quantidade-de-pessoas select" ).change(function() {
					jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 45 }, 1000);
				});


				jQuery('.campo-nome').focus(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 45 }, 1000);});
				jQuery('.campo-email').focus(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 45 }, 1000);});
				jQuery('.campo-ddd').focus(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 45 }, 1000);});
				jQuery('.campo-telefone').focus(function(){jQuery("html, body").animate({ scrollTop: jQuery(this).offset().top - 45 }, 1000);});


				jQuery('.campo-nome, .campo-email, .campo-ddd, .campo-telefone').focus(function(){
					jQuery(".margin-rodape").addClass("remove-altura-margin-rodape");
					jQuery(".telefones-rodape").addClass("remove-telefone-rodape");
				});

				jQuery('.campo-nome, .campo-email, .campo-ddd, .campo-telefone').blur(function(){
					jQuery(".margin-rodape").removeClass("remove-altura-margin-rodape");
					jQuery(".telefones-rodape").removeClass("remove-telefone-rodape");
				});

			}

		});

		// MÁSCARAS
		jQuery("#ddd").mask("900");
		jQuery("#telefone").mask("90000-0000", {reverse: true});
		jQuery("#cpf").mask("000.000.000-00");
		jQuery("#cnpj").mask("00.000.000/0000-00");


		function salvaCookies(){
			setCookie('data_lead_operadora', jQuery('.campo-operadora').val(), 3);
			setCookie('data_lead_tipo', jQuery('input[name=idTipo]:checked').val(), 3);
			setCookie('data_lead_possui_cnpj', jQuery('input[name=possuiCNPJ]:checked').val(), 3);
			setCookie('data_lead_possui_plano', jQuery('input[name=possuiPlano]:checked').val(), 3);
			setCookie('data_lead_quantidade_pessoas', jQuery('select[name=qntPessoas] option').filter(':selected').val(), 3);
			setCookie('data_lead_name', jQuery('.campo-nome').val(), 3);
			setCookie('data_lead_email', jQuery('.campo-email').val(), 3);
			setCookie('data_lead_ddd', jQuery('.campo-ddd').val(), 3);
			setCookie('data_lead_telefone', jQuery('.campo-telefone').val(), 3);
			setCookie('data_lead_telefone_com_ddd', "("+jQuery('.campo-ddd').val()+") " + jQuery('.campo-telefone').val(), 3);
			function setCookie(name, value, days) {
				var d = new Date;
				d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
				document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
			}
		}


	});

}(window.jQuery || window.jQuery));
