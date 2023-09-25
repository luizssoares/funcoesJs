 /// No custom se quiser fazer um AUP Select  ///

function setSelectedZoomItem(selectedItem) 
{
	
	//ok
	if(selectedItem.inputId == "txt_projeto")
	{
		$('#codProjeto').val(selectedItem.CODCCUSTO);
		atualizaZoomFilterAcao(selectedItem.CODCCUSTO);
		styleFormatDisable()
	}

	//ok
	if(selectedItem.inputId == "txt_acao")
	{
		$('#codAcao').val(selectedItem.CODACAO);
		var codProjeto = $('#codProjeto').val();
		atualizaZoomFilterRecursos(codProjeto, selectedItem.CODACAO);styleFormatDisable();
	}
	
}

function removedZoomItem(removedItem) 
{
	if(removedItem.inputId.startsWith('txt_projeto'))
	{
		$("#txt_acao").val();
		$("#txt_recursos").val();
		
		$("#codProjeto").val();
		$("#codAcao").val();
		$("#codRecurso").val();
	}
}	

function atualizaZoomFilterAcao(codProjeto)
{
    reloadZoomFilterValues("txt_acao", "txt_projeto,"+codProjeto);
}

function atualizaZoomFilterRecursos(codProjeto, codAcao)
{
    reloadZoomFilterValues("txt_recursos", "txt_projeto,"+codProjeto+",txt_acao,"+codAcao);
}


