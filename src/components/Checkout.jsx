import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: ''
  });
  const [checkMail, setCheckMail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const { cart, total, removeList } = useContext(CartContext);
  const [validated, setValidated] = useState(false);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const finalizarCompra = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setError(null);
      return;                        
    }

 
    if (buyer.email !== checkMail) {
      setError('Los mails no coinciden');
      setValidated(true);
      return;                          
    }

    setError(null);
    setValidated(true);

    
    const order = {
      comprador: buyer,
      compras: cart,
      total: total(),
      fecha: serverTimestamp()
    };

    const ventas = collection(db, 'orders');

    try {
      const res = await addDoc(ventas, order);
      setOrderId(res.id);
      removeList();
    } catch (err) {
      console.log(err);
      setError('Ocurrió un error al procesar la compra. Intentá nuevamente.');
    }
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {
        orderId
          ? (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center', padding:'3rem', gap:'3rem'}} >
              <h2> Realizaste correctamente tu compra! 🛒</h2>
              <h4 style={{background:'#32CD32',padding:'2rem'}}>El código de seguimiento es: {orderId}</h4>
              <Link to='/' className='btn btn-dark'>Volver a home</Link>
            </div>
          )
          : (
            <div>
              <Form noValidate validated={validated} onSubmit={finalizarCompra} style={{padding:'4rem', margin:'1rem', background:'#232527ff', color:'white'}}>
                <Row className="mb-6">
                  <Form.Group as={Col} md="2" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Nombre"
                      name="nombre"
                      value={buyer.nombre}
                      onChange={buyerData}
                    />
                    <Form.Control.Feedback>Bien Hecho!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="2" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Apellido"
                      name="apellido"
                      value={buyer.apellido}
                      onChange={buyerData}
                    />
                    <Form.Control.Feedback>Bien Hecho!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                    <Form.Label>Mail</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="@email"
                        aria-describedby="inputGroupPrepend"
                        required
                        name="email"
                        value={buyer.email}
                        onChange={buyerData}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, colocá tu Mail.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationCustomUsername2">
                    <Form.Label>Repetí tu Mail</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="@email"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={checkMail}
                        onChange={(e) => setCheckMail(e.target.value)}
                        isInvalid={validated && checkMail !== buyer.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, repetí tu Mail correctamente.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Dirección"
                      required
                      name="direccion"
                      value={buyer.direccion}
                      onChange={buyerData}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, colocá tu dirección correctamente.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Acepto los términos y condiciones"
                    feedback="Tenés que aceptar, antes de comprar."
                    feedbackType="invalid"
                  />
                </Form.Group>

                {error && (
                  <p className="text-danger mb-2">
                    {error}
                  </p>
                )}

                <Button type="submit">Enviar</Button>
              </Form>
            </div>
          )
      }
    </>
  );
};

export default Checkout;