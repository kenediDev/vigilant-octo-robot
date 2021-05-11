import {
    ValidationAlbum,
    ValidationService,
    ValidationTestimonials,
    ValidationVision
} from "../types/interface";

class Validator {
    album(args: ValidationAlbum) {
        if (args.message) {
            return args.message;
        } else if (args.photo) {
            return args.photo[0];
        } else if (args.title) {
            return args.title[0];
        } else if (args.caption) {
            return args.caption[0];
        }
    }

    service(args: ValidationService) {
        if (args.message) {
            return args.message;
        } else if (args.image) {
            return args.image[0];
        } else if (args.name) {
            return args.name[0];
        } else if (args.description) {
            return args.description[0];
        }
    }
    testimonials(args: ValidationTestimonials) {
        if (args.message) {
            return args.message;
        } else if (args.avatar) {
            return args.avatar[0];
        } else if (args.name) {
            return args.name[0];
        } else if (args.comment) {
            return args.comment[0];
        } else if (args.from) {
            return args.from[0];
        }
    }

    vision(args: ValidationVision) {
        if (args.message) {
            return args.message;
        } else if (args.image) {
            return args.image[0];
        } else if (args.title) {
            return args.title[0];
        } else if (args.caption) {
            return args.caption[0];
        }
    }
}

export const AlValidator = new Validator();
