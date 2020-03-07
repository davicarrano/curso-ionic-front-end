import { PagamentoDTO } from './pagamento.dto';
import { RefDTO } from './ref.dto';
import { ItensPedidoDTO } from './itens-pedido.dto';

export interface PedidoDTO{
    cliente: RefDTO;
    endereco: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItensPedidoDTO[];

    
}