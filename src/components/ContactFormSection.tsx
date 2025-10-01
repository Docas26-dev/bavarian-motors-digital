import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  email: z.string().trim().email('Email inválido').max(255, 'Email muito longo'),
  phone: z.string().trim().min(1, 'Telefone é obrigatório').max(20, 'Telefone muito longo'),
  message: z.string().trim().min(1, 'Mensagem é obrigatória').max(1000, 'Mensagem muito longa'),
});

type FormData = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/r1wmwx936arvj8x5txgaesth2yxrxbgs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro no envio');
      }

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      
      reset();
    } catch (error) {
      toast({
        title: 'Ocorreu um erro. Por favor, tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bmw-section bg-muted">
      <div className="bmw-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Preencha o formulário e a nossa equipa entrará em contato consigo
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="bmw-card p-8 lg:p-12 bg-card">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Nome *
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Mensagem *
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  className="mt-2 min-h-[120px]"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-bmw-primary"
              >
                {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
