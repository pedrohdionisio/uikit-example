import { Avatar, AvatarFallback, AvatarImage, Button } from 'phd-ui-kit';

export function App() {
  return (
    <div>
      <Button onClick={() => alert('deu bom')}>
        Hello JStack!
      </Button>

      <Avatar>
        <AvatarImage src="https://github.com/pedrohdionisio.png" alt="@pedrohdionisio" />
        <AvatarFallback>PH</AvatarFallback>
      </Avatar>
    </div>
  );
}
