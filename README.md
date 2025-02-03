# usevalid.email

[![Deno](https://github.com/usevalid-email/deno-sdk/actions/workflows/deno.yml/badge.svg)](https://github.com/usevalid-email/deno-sdk/actions/workflows/deno.yml)

Validate Your Emails with Confidence

# Getting started

## Installation

You can install the package via npm:

```bash
deno install --allow-net --allow-read --unstable -n usevalid-email https://deno.land/x/usevalid_email_sdk/mod.ts
```

## Usage

```ts
// using Sdk
import Sdk from "https://deno.land/x/usevalid_email_sdk/main.ts";

const sdk = new Sdk("your-api-key");
const validator = sdk.validator;

const email = "test@gmail.com";

validator.validate(email).then((response) => {
  console.log(response);
});
```

or

```ts
// using useValidEmail
import { useValidEmail } from "https://deno.land/x/usevalid_email_sdk/main.ts";

const email = "test@gmail.com";
const validator = useValidEmail("your-api-key");

validator(email).then((response) => {
  console.log(response);
});
```

## Testing

```bash
deno task test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [All Contributors](https://github.com/usevalid-email/js-sdk/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
