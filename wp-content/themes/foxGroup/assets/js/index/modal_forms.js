	$(document).ready(function(){
		$(".js--modal_order--toggler").click(function(){
			var form =$(".js--modal__order");
			setModalPosition(form);
			form.show();
			setFocusOnForm(form);
			showModalBackground();
			initModalCloseOnEsc();
			event.preventDefault();
		});
		$(".js--modal-form").on("click", ".js--modal-form-close", closeModal)
		$(".js--modal-form-cover").click(closeModal);
		$(".js--modal-form").on("change input",".js--form-validated__field input, .js--form-validated__field textarea", validateField);

		window.formsNamespace = window.formsNamespace ? window.formsNamespace : {};
		window.formsNamespace.setFocusOnForm = setFocusOnForm;
		var validationFunctions = {};
		validationFunctions.email = validateEmail;



		function setModalPosition(form){
			var offsetTop=($(window).scrollTop()-(form.outerHeight()/2)+$(window).height()/2);
			offsetTop= offsetTop<0 ? 35 : offsetTop;
			offsetTop = $(window).scrollTop()>offsetTop ?  $(window).scrollTop()+35 : offsetTop;
			if (form.outerHeight() + offsetTop > $(document).height()) {
				offsetTop = $(document).height() - form.outerHeight();
			}
			form.css({
				"top":offsetTop
			});
		}
		function showModalBackground(){
			$("body, html").addClass("popup--active");
			$(".js--modal-form-cover").show();
		}
		function closeModal(){
			$(".js--modal-form").hide();
			$(".js--modal-form-cover").hide();
			$("body, html").removeClass("popup--active");
			initModalCloseOnEsc(true);
		}
		function setFocusOnForm($form){
			if ($form.offset().top < $(window).scrollTop() || $form.offset().top > $(window).scrollTop()+$(window).height()) {
				$('body,html').animate({
					scrollTop:$form.offset().top
				},0);
			}
		}
		function initModalCloseOnEsc(off){
			if (!off) {
				$(document).on("keydown.modalclose",function(event){
					if(event.which === 27){
						closeModal();
					}
				});
			}else{
				$(document).off("keydown.modalclose");
			}
		}
		function validateEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}
		function validateField(){
			var field = $(event.target);
			var valid;
			if(field.prop("type")==="checkbox"){
				valid = field.is(":checked");
			}else if(field.data("pattern")){
				valid=validate(field.val(), field.data("pattern")).valid;
			}else{
				valid=validate(field.val()).valid;
			}
			if(valid){
				field.closest(".js--form-input__wrap").removeClass("form-input__wrap--error");
			}else{
				field.closest(".js--form-input__wrap").addClass("form-input__wrap--error");
			}
			return valid;
		}
		function validate(val,pattern) {
			var value=val.trim();
			var result={
				valid:true,
				message:""
			}
			if(!value){
				result.valid=false;
				result.message = "Field should not be empty";
			}else if (pattern) {
				if (typeof validationFunctions[pattern] === "function") {
					if (!validationFunctions[pattern](value)) {
						result.message = "Field value is incorrect";
						result.valid = false;
					}
				} else {
					if (!pattern.test(value)) {
						result.message = "Field value is incorrect";
						result.valid = false;
					}
				}
			}else if(value && value.length<3){
				result.valid=false;
				result.message = "Field should contain at least 3 characters";
			}
			return result;
		}
		$(".modal-form-cover, .modal-form__close").click(function(){
			closeModal();
		});
	});

