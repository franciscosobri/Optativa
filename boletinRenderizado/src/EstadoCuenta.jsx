export default function EstadoCuenta({isPositive}) {
    return (
        <div>
            {isPositive ? 'Saldo Positivo' : 'Saldo Negativo'}
        </div>
    );
}