
    $(function(){
     
        //функция установки значений полей согласно сохраненным опциям в localStorage
        var restore_options = function(){
            var name = $(this).attr('name');
            if (localStorage[name] !== undefined)
            {
                $(this).val(localStorage[name]);
            }
            else
            {
                localStorage[name] = $(this).val()
            }
        };
     
        //устанавливаем значения полей (инпетов и селектов)
        $("input[type!=submit]").each(restore_options);
        $("select").each(restore_options);
     
     
        //функция сохранения значений полей в localStorage
        var save_options = function(){
            var name = $(this).attr('name');
            localStorage[name] = $(this).val();
        };
     
        //по клику на сабмит сохраняем поля и выводим окно с сообщением OK
        $("#save").click(function(){
            $("input[type!=submit]").each(save_options);
            $("select").each(save_options);
            chrome.extension.getBackgroundPage().onSettingsUpdate(); 
        });
     
    });

